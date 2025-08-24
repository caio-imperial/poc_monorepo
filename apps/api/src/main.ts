import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS,
  });
  await app.listen(process.env.PORT ?? 3004).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
