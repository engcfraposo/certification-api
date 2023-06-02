import { Test, TestingModule } from '@nestjs/testing';
import { UserCertificationService } from './user-certification.service';

describe('UserCertificationService', () => {
  let service: UserCertificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCertificationService],
    }).compile();

    service = module.get<UserCertificationService>(UserCertificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
