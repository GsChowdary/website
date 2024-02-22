import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QueryDocument = HydratedDocument<Query>;

@Schema()
export class Query {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  query: string;
}

export const QuerySchema = SchemaFactory.createForClass(Query);