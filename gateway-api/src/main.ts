import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Gateway API');
  const port = 3000;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  
  logger.debug(`Rodando na porta ${port}`);
}
bootstrap();
