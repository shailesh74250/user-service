/**
 * Configuration file
 * @constant loggerConfig
 *
 */
import { registerAs } from '@nestjs/config'

export default registerAs('LOGGER', () => ({
  TRANSPORTS: process.env.LOGGER_TRANSPORTS || 'console',
  LOGGER_ALLOWED_LEVELS: process.env.LOGGER_ALLOWED_LEVELS || 'info, error, warn, debug',
}));