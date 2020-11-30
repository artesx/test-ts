import { InputType, Field } from '@nestjs/graphql'
@InputType()
export class DateTimeInput {
  @Field({nullable: true})
  gte?: string

  @Field({nullable: true})
  lte?: string
}
