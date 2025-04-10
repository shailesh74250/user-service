import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';
import { ConfigService } from '@nestjs/config';

export const cacheFactory = async (configService: ConfigService) => {
  const config = configService.get('redis');
  const redisUrl = `redis://${config.host}:${config.port}` || 'redis://localhost:6379';
  const ttl = config.ttl || 60000;

  return {
    stores: [
      new Keyv({ ttl }), // default in-memory
      new Keyv({ store: new KeyvRedis(redisUrl), ttl }),
    ],
  };
};
