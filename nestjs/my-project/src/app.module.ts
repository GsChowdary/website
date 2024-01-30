// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CatsService } from './cat/cat.service';
import { CatController } from './cat/cat.controller';
import { User, UserSchema } from './auth/user.model';
import { Cat, CatSchema } from './cat/schemas/cat.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest-auth-example', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Cat.name, schema: CatSchema },
        ]),
        JwtModule.register({
            secret: 'your-secret-key',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController, CatController],
    providers: [AuthService, CatsService, JwtAuthGuard],
})
export class AppModule { }
