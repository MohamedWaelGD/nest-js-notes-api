import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@ApiTags('notes')
@Controller('api/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @ApiOperation({ summary: 'Get all notes' })
  @ApiResponse({ status: 200, type: [Note] })
  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @ApiOperation({ summary: 'Get a note by ID' })
  @ApiResponse({ status: 200, type: Note })
  @ApiResponse({ status: 404, description: 'Note not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create a note' })
  @ApiResponse({ status: 201, type: Note })
  @Post()
  create(@Body() body: CreateNoteDto) {
    return this.notesService.create(body);
  }

  @ApiOperation({ summary: 'Update a note' })
  @ApiResponse({ status: 200, type: Note })
  @ApiResponse({ status: 404, description: 'Note not found' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateNoteDto) {
    return this.notesService.update(+id, body);
  }

  @ApiOperation({ summary: 'Delete a note' })
  @ApiResponse({ status: 200, description: 'Note deleted' })
  @ApiResponse({ status: 404, description: 'Note not found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
