import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CertificationsModule } from './certifications/certifications.module';
import { UserCertificationModule } from './user-certification/user-certification.module';
import { User } from './users/entities/user.entity';
import { Certification } from './certifications/entities/certification.entity';
import { UserCertification } from './user-certification/entities/user-certification.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'osertaoseracloud.database.windows.net',
      port: 1433,
      username: 'engcfraposo',
      password: 'Password@001',
      database: 'certification-api',
      synchronize: true,
      entities: [User, Certification, UserCertification],
    }),
    UsersModule,
    CertificationsModule,
    UserCertificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
