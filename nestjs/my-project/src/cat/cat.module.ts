import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './cat.controller';
import { CatsService } from './cat.service';
import { Cat, CatSchema } from '../schemas/cat.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]), AuthModule],
  controllers: [CatController],
  providers: [CatsService],
})
export class CatsModule { }