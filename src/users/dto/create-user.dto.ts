import { User } from '../entities/user.entity';

export class CreateUserDto {
  id?: string;
  name: string;
  email: string;
  password: string;
  entityToDTO(entity: User) {
    this.id = entity.id;
    this.name = entity.name;
    this.email = entity.email;
    this.password = entity.password;
  }
}
