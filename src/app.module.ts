import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import databaseConfig from './config/database.config';
import redisConfig from './config/cache.config';
import { swaggerConfig } from './config/swagger.config';
import { LoggerModule } from './logger/logger.module';
import loggerConfig from './config/logger.config';
import { ApiKeyMiddleware } from './middleware/api-key.middleware'
import { HealthModule } from './health/health.module';
import { RedisModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      load: [databaseConfig, swaggerConfig, loggerConfig, redisConfig],
      cache: true,
    }),
    UsersModule,
    DatabaseModule,
    LoggerModule,
    HealthModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*') // or specific route / controller
  }
}
