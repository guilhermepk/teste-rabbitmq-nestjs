import { Controller, Logger } from "@nestjs/common";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";

@Controller()
export class MathController {
    private logger = new Logger(MathController.name)

    @MessagePattern('notifications')
    getNotifications(
        @Payload() data: number[],
        @Ctx() context: RmqContext
    ){
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();
        const messageContent = originalMsg.content.toString()

        // console.log(`Pattern ${context.getPattern()}`);
        // console.log('Message:')
        // console.log(originalMsg);
        // console.log(`Message content: ${messageContent}`);
        // console.log('Channel Ref:');
        // console.log(channel);
        
        // channel.ack(originalMsg);

        const returnText = `Conteúdo: ${messageContent}`;

        this.logger.debug(returnText);

        return returnText;
    }
}