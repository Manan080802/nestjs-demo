/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserMiddleware } from "src/middleware/user.middleware";
import { userService } from "./user.service";

@Module({
    imports:[],
    controllers:[UserController],
    providers:[userService],
    exports:[]

})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserMiddleware).forRoutes(UserController)
    }
}