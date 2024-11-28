/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DatabaseConnectionService } from "./database.service";

@Module({
    imports:[MongooseModule.forRootAsync({
        useClass:DatabaseConnectionService
    })],
    providers:[],
    exports:[MongooseModule]
})
export class DatabaseConnectionModule {

}