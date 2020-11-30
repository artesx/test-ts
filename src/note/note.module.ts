import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './domain/note.schema';
import { NoteService } from './domain/note.service';

import { NoteResolver } from './graphql';

@Module({
  imports: [MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])],
  providers: [
    NoteResolver,
    NoteService
  ],
})
export class NoteModule {}