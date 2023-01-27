import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  street: string;

  @Column({
    nullable: false,
  })
  city: string;

  @Column({
    nullable: false,
  })
  postalCode: number;

  @Column({
    nullable: false,
  })
  country: string;
  @Column({
    nullable: false,
  })
  phone: number;

  @ManyToMany(() => User, (user) => user?.address)
  user?: User[];
}
