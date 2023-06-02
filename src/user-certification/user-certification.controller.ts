import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCertificationService } from './user-certification.service';
import { CreateUserCertificationDto } from './dto/create-user-certification.dto';
import { UpdateUserCertificationDto } from './dto/update-user-certification.dto';

@Controller('user-certification')
export class UserCertificationController {
  constructor(private readonly userCertificationService: UserCertificationService) {}

  @Post()
  create(@Body() createUserCertificationDto: CreateUserCertificationDto) {
    return this.userCertificationService.create(createUserCertificationDto);
  }

  @Get()
  findAll() {
    return this.userCertificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCertificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCertificationDto: UpdateUserCertificationDto) {
    return this.userCertificationService.update(+id, updateUserCertificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCertificationService.remove(+id);
  }
}
