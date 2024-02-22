import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cat.service';
import { Cat } from 'src/schemas/cat.schema';
import { CreateCatDto } from 'src/dto/cat';

@Controller('cat')
export class CatController {
    constructor(private service: CatsService){}
    @Get()
    async get(): Promise<Cat[]> {
        return await this.service.findAll();
    }

    @Post()
    async post(@Body() cat: CreateCatDto): Promise<Cat> {
        return await this.service.create(cat);
    }
}
