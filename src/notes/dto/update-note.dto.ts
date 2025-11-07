import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateNoteDto {
  @ApiProperty({
    example: 'Shopping List',
    description: 'Title of the note',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'Buy milk, eggs, and bread',
    description: 'Content of the note',
    required: false,
  })
  @IsOptional()
  @IsString()
  content?: string;
}
