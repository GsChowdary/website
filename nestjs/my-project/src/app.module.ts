import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { CatsService } from './cat/cat.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestjsdb'), AuthModule, UsersModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
