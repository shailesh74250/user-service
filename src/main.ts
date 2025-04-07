import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { LoggerService } from './logger/logger.service';
import { LoggingInterceptor } from './logger/logging.interceptor';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // gRPC microservice
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'user',
  //     protoPath: join(__dirname, 'proto/user.proto'),
  //   },
  // });

  // Configurations
  const configService = app.get(ConfigService);
  const logger = app.get(LoggerService);
  const loggerService = new LoggerService(configService);
  app.useGlobalInterceptors(new LoggingInterceptor(loggerService));

  // Apply cors and securities
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
    SwaggerModule.setup(
      swaggerConfig.documentRoute || 'api/docs',
      app,
      document,
    );
  }

  logger.info(
    `Application started at ${process.env.PORT ?? 3000}`,
    'Azilen NestJS',
  );


  // await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
