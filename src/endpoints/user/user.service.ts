import {Injectable} from '@nestjs/common';
import {User} from 'src/models';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  getAll(): Promise<User[]> {
    return this.userRepository.orm.find();
  }

  insert(row: User) {
    return this.userRepository.orm.insert(row);
  }

  update(row: Partial<User>, id: string) {
    return this.userRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.userRepository.orm.delete({id: id});
  }
}
