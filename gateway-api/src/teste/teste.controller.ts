import { Controller, Get, Inject, InternalServerErrorException, Param } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller('teste')
export class TesteController {
    constructor(
        @Inject('MATH_SERVICE') private client: ClientProxy
    ){}

    @Get('a=:a')
    receiveA(
        @Param('a') a: string
    ){
        try{
            const pattern = 'notifications';
            const payload = a;
            
            return this.client.send(pattern, payload);
        }catch(error){
            console.log(error)
            throw new InternalServerErrorException('Erro massa esse');
        }
    }
}