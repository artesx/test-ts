import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateNoteInput {
  @Field()
  name: string

  @Field()
  description?: string
}
