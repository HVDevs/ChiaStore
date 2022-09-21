import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000); // el server se corre en el puerto 8000, aunque por defecto es el 3000
}
bootstrap();
