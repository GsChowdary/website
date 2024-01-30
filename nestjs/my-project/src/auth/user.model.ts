// src/auth/user.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Cat, CatSchema } from '../cat/schemas/cat.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [CatSchema], default: [] })
  cats: Cat[];
}

export const UserSchema = SchemaFactory.createForClass(User);
