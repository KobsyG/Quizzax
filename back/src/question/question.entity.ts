import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Theme } from './theme/theme.entity';
import { Type } from './type.entity';
import { IsOptional } from '@nestjs/class-validator';



@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  reponse: string;

  // @IsOptional()
  @ManyToOne(() => Theme)
  theme: Theme;

  @IsOptional()
  @ManyToOne(() => Type, type => type.type)
  type: Type;

  @IsOptional()
  @Column()
  point: number;

  
}