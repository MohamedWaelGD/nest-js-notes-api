import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  findAll() {
    return this.notesRepository.find();
  }

  async findOne(id: number) {
    const note = await this.notesRepository.findOneBy({ id });
    if (!note) throw new NotFoundException(`Note with ID ${id} not found`);
    return note;
  }

  create(data: Partial<Note>) {
    const newNote = this.notesRepository.create(data);
    return this.notesRepository.save(newNote);
  }

  async update(id: number, data: Partial<Note>) {
    const note = await this.findOne(id);
    if (!note) throw new NotFoundException(`Note with ID ${id} not found`);
    Object.assign(note, data);
    return this.notesRepository.save(note);
  }

  async remove(id: number) {
    const note = await this.findOne(id);
    return this.notesRepository.remove(note);
  }
}
