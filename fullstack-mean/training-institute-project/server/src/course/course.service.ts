import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from 'src/dto/course';
import { Course } from 'src/schemas/course.schema';

@Injectable()
export class CourseService {
    constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course> {
    return this.courseModel.findById(id).exec();
  }
  
  async delete(id: string): Promise<any> {
    return this.courseModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, courseDto: CreateCourseDto ) {  
    console.log("Update", id, courseDto);  
    return await this.courseModel.updateOne({_id: id}, courseDto);        
  }
  
}
