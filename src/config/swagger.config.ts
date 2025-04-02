import { registerAs } from '@nestjs/config';

/**
 * Swagger configuration for Azilen NestJS API.
 *
 * @constant {Function} swaggerConfig - The configuration function for Swagger.
 */
export const swaggerConfig = registerAs('swagger', () => ({
  title: 'User Service API',
  description: 'API documentation for User Service',
  version: '1.0',
  tag: 'users',
  documentRoute: 'api',
}));
