import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * TypeORM Configuration Factory
 *
 * This function dynamically configures TypeORM based on environment variables.
 */
export const typeOrmFactory = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const config = configService.get('database');

  return {
    type: config.type as 'postgres' | 'mysql' | 'mariadb', // Ensure it's a TypeORM-supported type
    host: config.host,
    port: +config.port, // Ensure port is a number
    username: config.username,
    password: config.password,
    database: config.database,

    // Load entities dynamically based on environment
    entities: config.entities,

    synchronize: config.synchronize || false, // Set to false in production
    logging: config.logging || false, // Enable logging based on environment
    migrations: config.migrations, // Add migration support
    migrationsRun: config.migrationsRun || false,

    // Enable auto-load of entities in NestJS
    autoLoadEntities: config.autoLoadEntities,

    ssl: config.ssl
      ? {
          rejectUnauthorized: false, // Adjust based on security requirements
        }
      : false,

    extra: {
      max: 10, // Max DB connections
      idleTimeoutMillis: 10000, // Auto close idle connections
    },
  };
};
