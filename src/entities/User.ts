import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ type: 'varchar', length: 100 })
    username!: string;

  @Column({ type: 'varchar', length: 100 })
    email!: string;

  @Column({ type: 'varchar', length: 255 })
    password!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt!: Date;
}
