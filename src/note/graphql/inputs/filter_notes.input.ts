import { InputType, Field } from '@nestjs/graphql'
import { DateTimeInput } from 'src/common/input/date_time.input'

@InputType()
export class FilterNotesInput {
  @Field({nullable: true, description: 'Идентификатор заметки'})
  id?: string

  @Field({nullable: true, description: 'название заметки'})
  name?: string

  @Field({nullable: true, description: 'содержание заметки'})
  description?: string

  @Field({nullable: true, description: 'дата создания заметки'})
  createdAt?: DateTimeInput

  @Field({nullable: true, description: 'дата редактирования заметки'})
  updatedAt?: DateTimeInput
}
