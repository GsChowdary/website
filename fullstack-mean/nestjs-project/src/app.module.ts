import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjsdb'),
  AuthModule, UsersModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
