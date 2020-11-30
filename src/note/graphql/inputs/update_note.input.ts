import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateNoteInput {
  @Field({nullable: false})
  id: string

  @Field()
  name: string

  @Field({nullable: true})
  description?: string
}
