import { Module, Global } from '@nestjs/common';
import { cacheFactory } from './cache.factory';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    {
      provide: 'KEYV_REDIS',
      useFactory: cacheFactory,
      inject: [ConfigService],
    },
  ],
  exports: ['KEYV_REDIS'],
})
export class RedisModule {}
