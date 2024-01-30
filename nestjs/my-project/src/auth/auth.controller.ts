// src/auth/auth.controller.ts
import { Get, Post, Render, UseGuards, Request, Res, Body, Controller } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateCatDto } from './dto/cat';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Get('login')
    @Render('login') // Assuming 'login.html' is in the 'public' folder
    getLogin() {
        return {};
    }

    @Post('register')
    async register(@Body() registerDto: { username: string, password: string }) {
        return this.authService.createUser(registerDto.username, registerDto.password);
    }

    @UseGuards(JwtAuthGuard)
    @Post('cats')
    async createCat(@Request() req, @Body() createCatDto: CreateCatDto) {
        const userId = req.user.sub;
        return this.authService.associateCatWithUser(userId, createCatDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('cats')
    @Render('cats') // Assuming 'cats.html' is in the 'public' folder
    async getUserCats(@Request() req) {
        const userId = req.user.sub;
        const cats = await this.authService.getUserCats(userId);
        return { cats };
    }

    // Existing methods...
}
