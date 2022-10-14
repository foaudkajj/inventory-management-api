import { Injectable } from "@nestjs/common";
import { UserService } from "src/endpoints/user/user.service";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string){
        const user = await this.usersService.findOneByUsername(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
