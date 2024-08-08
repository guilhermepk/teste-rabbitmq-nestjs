import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { TesteController } from "./teste.controller";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MATH_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://rabbitmq:5672'],
                    queue: 'cats_queue',
                    queueOptions: {
                        durable: false
                    }
                }
            }
        ])
    ],
    controllers: [TesteController]
})
export class TesteModule {}