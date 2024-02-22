import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateCourseDto } from 'src/dto/course';
import { Course } from 'src/schemas/course.schema';
import { CourseService } from './course.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('course')
export class CourseController {
    constructor(private service: CourseService){}
    @Get()
    async get(): Promise<Course[]> {
        return await this.service.findAll();
    }

    @Get('/:id')
    async getOne(@Param() param): Promise<Course> {
        return await this.service.findOne(param.id);
    }

    @UseGuards(AuthGuard)
    @Post()
    async post(@Body() course: CreateCourseDto): Promise<Course> {
        return await this.service.create(course);
    }

    @UseGuards(AuthGuard)
    @Delete('/:id')
    async delete(@Param() param): Promise<Course> {
        return await this.service.delete(param.id);
    }

    @UseGuards(AuthGuard)
    @Put('/:id')
    async update(@Param() param, @Body() course: CreateCourseDto) {
        return await this.service.update(param.id, course);
    }
}
