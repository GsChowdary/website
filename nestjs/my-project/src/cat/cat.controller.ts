import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CatsService } from './cat.service';
import { Cat } from 'src/schemas/cat.schema';
import { CreateCatDto } from 'src/dto/cat';
import { JwtService } from '@nestjs/jwt';

@Controller('cat')
export class CatController {
    constructor(private service: CatsService, private jwtService: JwtService) { }
    @UseGuards()
    @Get()
    async get(): Promise<Cat[]> {
        return await this.service.findAll();
    }

    @UseGuards()
    @Post()
    async post(@Body() cat: CreateCatDto): Promise<Cat> {
        return await this.service.create(cat);
    }
}
