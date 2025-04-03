import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.use(helmet());
  // ✅ Ensure ConfigService is returning Swagger config correctly
  const swaggerConfig = configService.get<any>('swagger');
  console.log('Swagger Config:', swaggerConfig); // Debugging

  if (!swaggerConfig) {
    console.warn('⚠️ Swagger config not found. Skipping Swagger setup.');
  } else if (process.env.NODE_ENV !== 'production') {
    /**
     * Swagger configuration object.
     */
    const swagger = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'API Docs')
      .setDescription(swaggerConfig.description || 'API description')
      .setVersion(swaggerConfig.version || '1.0')
      .addTag(swaggerConfig.tag || 'API')
      .build();

    /**
     * Swagger document setup.
     */
    const document = SwaggerModule.createDocument(app, swagger);
    SwaggerModule.setup(swaggerConfig.documentRoute || 'api/docs', app, document);
  }

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
