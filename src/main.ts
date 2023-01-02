import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { FeedModule } from './feed/feed.module';
import compression from '@fastify/compress';
import { LoginModule } from './login/login.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('api');
  await app.register(compression, { encodings: ['gzip', 'deflate'] });

  const config = new DocumentBuilder()
    .setTitle('Fake Linkedin api')
    .setDescription('The Fake Linkedin API documentation')
    .setVersion('1.0')
    .addTag('Linkedin')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
    include: [LoginModule, FeedModule],
  });
  SwaggerModule.setup('api-docs', app, document, {
    customSiteTitle: 'Fake Linkedin api docs',
    explorer: false,
  });

  await app.listen(3000);
}
bootstrap();
