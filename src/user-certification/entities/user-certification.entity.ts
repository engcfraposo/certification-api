import { Certification } from 'src/certifications/entities/certification.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateUserCertificationDto } from '../dto/create-user-certification.dto';
import { UpdateUserCertificationDto } from '../dto/update-user-certification.dto';

@Entity('tb_user_certification')
export class UserCertification {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Certification, (user) => user.user_certification)
  user: User;
  @ManyToOne(
    () => Certification,
    (certification) => certification.user_certification,
  )
  certification: Certification;

  @Column()
  achievement_from: Date;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;

  dtoToEntity(dto: CreateUserCertificationDto | UpdateUserCertificationDto) {
    this.achievement_from = dto.achievement_from;
  }
}
