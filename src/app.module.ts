import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import databaseConfig from './config/database.config';
import { swaggerConfig } from './config/swagger.config';
import { LoggerModule } from './logger/logger.module';
import loggerConfig from './config/logger.config';
import { ApiKeyMiddleware } from './middleware/api-key.middleware'
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      load: [databaseConfig, swaggerConfig, loggerConfig],
      cache: true,
    }),
    UsersModule,
    DatabaseModule,
    LoggerModule,
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*') // or specific route / controller
  }
}
