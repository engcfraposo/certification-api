import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { swagger } from './swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app);
  await app.listen(8080);
}
bootstrap();
