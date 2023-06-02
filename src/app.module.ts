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
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        synchronize: true,
        entities: [User, Certification, UserCertification],
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    CertificationsModule,
    UserCertificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
