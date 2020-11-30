import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { NoteService } from '../domain/note.service'
import { NoteType } from './note.type'
import { CreateNoteInput, UpdateNoteInput } from './inputs'
import { FilterNotesInput } from './inputs/filter_notes.input'

@Resolver((of) => NoteType)
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Query((returns) => [NoteType])
  notes(@Args('filterNotesInput') filterNotesInput?: FilterNotesInput) {
    return this.noteService.find(filterNotesInput)
  }

  @Query((returns) => NoteType)
  note(@Args('id') id: string) {
    return this.noteService.findOne(id)
  }

  @Mutation((returns) => NoteType)
  createNote(@Args('createNoteData') createNoteInput: CreateNoteInput) {
    return this.noteService.create(createNoteInput)
  }

  @Mutation((returns) => NoteType)
  updateNote(@Args('updateNoteData') updateNoteInput: UpdateNoteInput) {
    return this.noteService.update(updateNoteInput)
  }
}
