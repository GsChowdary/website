import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/dto/user';
import { User } from 'src/schemas/user.schema';



@Injectable()
export class UsersService {
constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<UserDTO | undefined> {
    const users = await this.findAll();
    return users.find(user => user.username === username);
  }
}