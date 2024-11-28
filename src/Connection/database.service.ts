/* eslint-disable prettier/prettier */

import { Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";



export class DatabaseConnectionService implements MongooseOptionsFactory {
    constructor(@Inject() private Config:ConfigService){}
    createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
        const port = this.Config.get('DATABASE_PORT')
        const name = this.Config.get('DATABASE_NAME')
        const type = this.Config.get('DATABASE_TYPE')

        const uri = `mongodb://${type}:${port}/${name}`
        console.log(`Database url : ${uri}`);
        
        return {
            uri
        }
    }

}