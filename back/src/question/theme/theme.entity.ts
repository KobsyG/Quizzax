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
export class Theme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  theme: string;

  @Column()
  color: string;

//   @Column({type: 'enum', enum: Theme, default: null})
//   theme: Theme;

//   @Column()
//   point: number;

  
}