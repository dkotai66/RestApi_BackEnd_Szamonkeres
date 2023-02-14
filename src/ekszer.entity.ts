import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ekszer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipus: string;

  @Column()
  ar: number;

  @Column()
  anyag: string;

  @Column()
  szin: string;
}
