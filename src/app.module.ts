import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import redisConfig from './config/cache.config';
import { swaggerConfig } from './config/swagger.config';
import { LoggerModule } from './shared/logger/logger.module';
import loggerConfig from './config/logger.config';
import { ApiKeyMiddleware } from './utils/middleware/api-key.middleware'
import { HealthModule } from './modules/health/health.module';
import { RedisModule } from './cache/cache.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`,
      load: [databaseConfig, swaggerConfig, loggerConfig, redisConfig],
      cache: true,
    }),
    DatabaseModule,
    UserModule,
    LoggerModule,
    HealthModule,
    RedisModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*') // or specific route / controller
  }
}
