import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseType {
  @Field(type => String)
  id: string;

  @Field(type => Date)
  createdAt: Date

  @Field(type => Date)
  updatedAt: Date
}