import { Test, TestingModule } from '@nestjs/testing';
import { UserCertificationController } from './user-certification.controller';
import { UserCertificationService } from './user-certification.service';

describe('UserCertificationController', () => {
  let controller: UserCertificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCertificationController],
      providers: [UserCertificationService],
    }).compile();

    controller = module.get<UserCertificationController>(UserCertificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
