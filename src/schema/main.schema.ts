/* eslint-disable prettier/prettier */
import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { USER_MODEL, userSchema } from "./user.schema";

const MODELS =[{
    name:USER_MODEL,schema:userSchema
}]
@Global()
@Module({
    imports:[MongooseModule.forFeature(MODELS)],
    exports:[MongooseModule]
})
export class MainSchema {

}