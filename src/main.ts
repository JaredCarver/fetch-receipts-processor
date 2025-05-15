import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Set a global pipe to no longer return the error messages from the DTO validator for the sake of the spec sheet
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        return new BadRequestException('The receipt is invalid.');
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
