import { Module } from '@nestjs/common';
import { CacheController } from './controllers/cache.controller';
import { CacheService } from './services/cache.service';

@Module({
  controllers: [CacheController],
  providers: [CacheService]
})
export class CacheModule {}
