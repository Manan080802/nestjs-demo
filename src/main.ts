/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    stopAtFirstError:true,
    whitelist:true
  }))
  await app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
    
  });
}
bootstrap();
