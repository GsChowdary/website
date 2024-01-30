import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Cat, CatSchema } from 'src/schemas/cat.schema';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private catSchema: Cat
    ) { }

    async signIn(
        username: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user._id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

}