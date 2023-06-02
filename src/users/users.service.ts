import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.dtoToEntity(createUserDto);
    const entity = await this.repository.save(user);
    const dto = new CreateUserDto();
    dto.entityToDTO(entity);
    return dto;
  }

  async findAll() {
    const entities = await this.repository.find();
    return entities.map((entity) => {
      const dto = new CreateUserDto();
      dto.entityToDTO(entity);
      return dto;
    });
  }

  async findOne(id: string) {
    const entity = await this.repository.findOneBy({ id });
    const dto = new CreateUserDto();
    dto.entityToDTO(entity);
    return dto;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = new User();
    user.dtoToEntity(updateUserDto);
    await this.repository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
  }
}
