import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Theme {
    Geo = "Géographie",
    Histoire = "Histoire"
}

export enum Type {
    QCM = "QCM",
    VouF = "Vrai ou Faux",
}

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column({type: 'enum', enum: Theme, default: null})
  theme: Theme;

  @Column()
  point: number;

  
}