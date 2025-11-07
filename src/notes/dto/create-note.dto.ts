import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    example: 'Shopping List',
    description: 'Title of the note',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Buy milk, eggs, and bread',
    description: 'Content of the note',
    required: false,
  })
  @IsOptional()
  @IsString()
  content?: string;
}
