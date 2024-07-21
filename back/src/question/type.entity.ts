import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// export enum Theme {
//     Geo = "Géographie",
//     Histoire = "Histoire"
// }

// export enum Type {
//     QCM = "QCM",
//     VouF = "Vrai ou Faux",
// }

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;


  
}