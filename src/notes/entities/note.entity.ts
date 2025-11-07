import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'My first note' })
  @Column()
  title: string;

  @ApiProperty({ example: 'This is a sample note content.' })
  @Column({ nullable: true })
  content?: string;
}
