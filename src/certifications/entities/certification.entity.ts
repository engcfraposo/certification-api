import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserCertification } from 'src/user-certification/entities/user-certification.entity';
import { CreateCertificationDto } from '../dto/create-certification.dto';
import { UpdateCertificationDto } from '../dto/update-certification.dto';

@Entity('tb_certification')
export class Certification {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  certification_name: string;
  @Column()
  image_url: string;
  @Column()
  title: string;
  @OneToMany(
    () => UserCertification,
    (user_certification) => user_certification.certification,
  )
  user_certification: UserCertification;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  dtoToEntity(dto: CreateCertificationDto | UpdateCertificationDto) {
    this.certification_name = dto.certification_name;
    this.image_url = dto.image_url;
    this.title = dto.title;
  }
}
