import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "src/endpoints/user/user.service";
import { JwtService } from "@nestjs/jwt";
import { compareSync } from "bcryptjs";
import { LoginResponse } from "src/models/responses/login.response";


@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string){
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const matchPassword = compareSync(password, user.password);
            if (matchPassword) {
              const { password, ...result } = user;
              return result;
            } else {
              throw new HttpException(
                'ERROR.WRONG_USERNAME_PASSWORD',
                HttpStatus.UNAUTHORIZED,
              );
            }
          }
        return null;
    }

    async login(user: any) {
      const payload = { username: user.username, sub: user.id };
      return <LoginResponse>{
        username:user.username,
        status:user.status,
        firstName:user.firstName,
        lastName:user.lastName,
        role:user.role.name,
        token: this.jwtService.sign(payload),
      };
    }
}
