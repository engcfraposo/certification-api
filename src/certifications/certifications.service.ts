import { Injectable } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { Certification } from './entities/certification.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CertificationsService {
  constructor(
    @InjectRepository(Certification)
    private readonly repository: Repository<Certification>,
  ) {}
  async create(createCertificationDto: CreateCertificationDto) {
    const certification = new Certification();
    certification.dtoToEntity(createCertificationDto);
    const entity = await this.repository.save(certification);
    const dto = new CreateCertificationDto();
    dto.entityToDTO(entity);
    return dto;
  }

  async findAll() {
    const entities = await this.repository.find();
    return entities.map((entity) => {
      const dto = new CreateCertificationDto();
      dto.entityToDTO(entity);
      return dto;
    });
  }

  async findOne(id: string) {
    const entity = await this.repository.findOneBy({ id });
    const dto = new CreateCertificationDto();
    dto.entityToDTO(entity);
    return dto;
  }

  async update(id: string, updateCertificationDto: UpdateCertificationDto) {
    const certification = new Certification();
    certification.dtoToEntity(updateCertificationDto);
    await this.repository.update(id, certification);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
  }
}
