import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Transform } from 'class-transformer'
import { Document } from 'mongoose'


export type NoteDocument = Note & Document

@Schema()
export class Note {
  @Prop()
  name: string

  @Prop()
  description?: string
}

const NoteSchema = SchemaFactory.createForClass(Note)

export {
  NoteSchema
}