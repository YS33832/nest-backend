import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: (process.env.NODE_ENV === 'dev')? ".development.env" : ".prod.env",
  }),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [__dirname + "/**/*.entity{.ts,.js}"]
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
