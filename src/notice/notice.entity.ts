import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notice')
export class Notice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  notice_id: string;

  @Column({ type: 'varchar', length: 50 })
  notice_title: string;

  @Column({ type: 'varchar' })
  notice: string;

}
