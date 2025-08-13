import { sdk } from './tracer';
sdk.start();
import { log } from './infra/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3003)
    .then(() => {
      log.info('http server on!');
    })
    .catch((error) => {
      log.error('http server error', error);
  });
}
bootstrap();