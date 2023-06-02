import { Certification } from '../entities/certification.entity';

export class CreateCertificationDto {
  id?: string;
  certification_name: string;
  image_url: string;
  title: string;
  entityToDTO(entity: Certification) {
    if (entity.id) {
      this.id = entity.id;
    }
    this.certification_name = entity.certification_name;
    this.image_url = entity.image_url;
    this.title = entity.title;
  }
}
