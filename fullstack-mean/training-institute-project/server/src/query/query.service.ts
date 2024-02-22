import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryDto } from 'src/dto/query';
import { Query } from 'src/schemas/query.schema';

@Injectable()
export class QueryService {
    constructor(@InjectModel(Query.name) private queryModel: Model<Query>) {}

    async create(createQueryDto: QueryDto): Promise<Query> {
      const createdQuery = new this.queryModel(createQueryDto);
      return createdQuery.save();
    }
  
    async findAll(): Promise<Query[]> {
      return this.queryModel.find().exec();
    }
    
    async delete(id: string): Promise<any> {
      return this.queryModel.findByIdAndDelete(id).exec();
    }
  
    async update(id: string, courseDto: QueryDto ) {    
      await this.queryModel.updateOne({_id: id}, courseDto);        
    }
}
