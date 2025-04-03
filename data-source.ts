import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import databaseConfig from './src/config/database.config';

dotenv.config(); // Load environment variables

const config = databaseConfig(); // Load database configuration

export const dataSourceOptions: DataSourceOptions = {
  type: config.type as 'postgres' | 'mysql' | 'mariadb',
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
  database: config.database,
  entities: ['src/**/*.entity{.ts,.js}'], // Load TypeScript & JavaScript entities
  migrations: ['src/migrations/*.ts'], // Load migration files from TypeScript
  synchronize: false, // Ensure synchronize is false for migrations
  logging: config.logging,
  ssl: config.ssl,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
