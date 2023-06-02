import { UserCertification } from 'src/user-certification/entities/user-certification.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Entity('tb_user')
export class User {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(
    () => UserCertification,
    (user_certification) => user_certification.user,
  )
  user_certification: UserCertification;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  dtoToEntity(dto: CreateUserDto | UpdateUserDto) {
    this.name = dto.name;
    this.email = dto.email;
    this.password = dto.password;
  }
}
