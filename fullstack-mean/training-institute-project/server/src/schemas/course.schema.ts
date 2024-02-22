import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop()
  name: string;

  @Prop()
  duration: string;

  @Prop()
  description: string;

  @Prop()
  show: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);