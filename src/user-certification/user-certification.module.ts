import { Module } from '@nestjs/common';
import { UserCertificationService } from './user-certification.service';
import { UserCertificationController } from './user-certification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCertification } from './entities/user-certification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserCertification])],
  controllers: [UserCertificationController],
  providers: [UserCertificationService],
})
export class UserCertificationModule {}
