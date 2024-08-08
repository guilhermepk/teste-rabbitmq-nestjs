import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Microserviço');
  const rabbitUrls = ['amqp://rabbitmq:5672'];
  const queueName = 'cats_queue'

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: rabbitUrls,
      queue: queueName,
      noAck: false,
      queueOptions: {
        durable: false
      },
    },
  });

  await app.listen();

  logger.debug(`Escutando fila "${queueName}" do RabbitMQ via ${rabbitUrls.map(url => `"${url}"`)}`);
}
bootstrap();
