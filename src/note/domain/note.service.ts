import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Note, NoteDocument } from './note.schema'
import { CreateNoteDto, UpdateNoteDto } from './note.dto'
import { FilterNotesInput } from '../graphql/inputs/filter_notes.input'

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(createCatDto: CreateNoteDto): Promise<Note> {
    const createdNote = new this.noteModel(createCatDto)
    return createdNote.save()
  }

  async update(updateNoteDto: UpdateNoteDto): Promise<Note> {
    await this.noteModel.updateOne({ _id: updateNoteDto.id }, updateNoteDto)
    return this.noteModel.findById(updateNoteDto.id).exec()
  }

  async find(filterNotes: FilterNotesInput): Promise<Note[]> {
    return this.noteModel.find(this.transformPredicates(filterNotes)).exec()
  }

  async findOne(id: string): Promise<Note> {
    return this.noteModel.findById(id).exec()
  }

  private transformPredicates(conditions) {
    for (const key in conditions) {
      if (key === 'createdAt' || key === 'updatedAt') {
        conditions[key].lte
          ? (conditions[key].$lte = conditions[key].lte)
          : null
        conditions[key].gte
          ? (conditions[key].$gte = conditions[key].gte)
          : null
        delete conditions[key].lte
        delete conditions[key].gte
      }
    }

    return conditions
  }
}
