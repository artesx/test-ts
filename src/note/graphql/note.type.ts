import { Field, Int, ObjectType } from '@nestjs/graphql'
import { BaseType } from 'src/common'

@ObjectType()
export class NoteType extends BaseType {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string
}