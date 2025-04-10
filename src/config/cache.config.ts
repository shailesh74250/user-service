import { registerAs } from "@nestjs/config";

export default registerAs('redis', () => ({
  port: process.env.REDIS_PORT || '6369',
  host: process.env.REDIS_HOST || 'localhost',
}))