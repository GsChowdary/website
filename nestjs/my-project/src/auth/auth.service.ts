// src/auth/auth.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User, UserDocument } from './user.model';
import { Cat, CatDocument } from '../cat/schemas/cat.schema';
import { CreateCatDto } from './dto/cat';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
    private jwtService: JwtService,
  ) {}

  async createUser(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ username, password: hashedPassword });
    return user.save();
  }

  async associateCatWithUser(userId: string, createCatDto: CreateCatDto): Promise<Cat> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const cat = new this.catModel(createCatDto);
    user.cats.push(cat);
    await user.save();
    return cat;
  }

  async getUserCats(userId: string): Promise<Cat[]> {
    const user = await this.userModel.findById(userId).exec();
    return user?.cats || [];
  }

  // Existing methods...
}
