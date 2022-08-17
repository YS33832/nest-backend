import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(__dirname + "/**/*.entity{.ts, .js}");
  console.log(process.env.PORT + "에서 실행중...");
}
bootstrap();
