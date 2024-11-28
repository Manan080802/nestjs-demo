/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnectionModule } from './Connection/database.module';
import { UserModule } from './user/user.module';
import { MainSchema } from './schema/main.schema';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
  }),DatabaseConnectionModule,MainSchema,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
