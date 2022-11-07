import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { genSaltSync, hashSync } from 'bcryptjs';
import { User } from 'src/models';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) { }
  getAll(): Promise<User[]> {
    return this.userRepository.orm.find();
  }

  async insert(row: User) {
    const usernameExist = await this.userRepository.orm.findOneBy({ username: row.username });
    if (usernameExist) {
      throw new HttpException(
        'ERROR.USERNAME_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
    }
    const salt = genSaltSync();
    const hashpassword = hashSync(row.password, salt);
    row.password = hashpassword;
    return this.userRepository.orm.insert(row);
  }

  async update(row: Partial<User>, id: string) {
    if (row.password) {
      const salt = genSaltSync();
      const hashpassword = hashSync(row.password, salt);
      row.password = hashpassword;
    }
    if (row.username) {
      const usernameExist = await this.userRepository.orm.findOneBy({ username: row.username });
      if (usernameExist) {
        throw new HttpException(
          'ERROR.USERNAME_ALREADY_EXIST',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    return this.userRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.userRepository.orm.delete({ id: id });
  }

  findOneByUsername(username: string) {
    return this.userRepository.orm.findOne({
      where: { username },
      relations: {
        role: {
          rolePermissions: {
            permission: true,
          },
        },
      },
    });
  }
}
