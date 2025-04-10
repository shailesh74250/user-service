import { registerAs } from "@nestjs/config";

interface dbConfigType {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  autoLoadEntities: boolean;
  migrations: string[];
  entities: string[];
  synchronize: boolean;
  logging: boolean;
  ssl: boolean;
};

export default registerAs('database', (): dbConfigType => ({
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'user_db',
  autoLoadEntities: true,
  migrations: [__dirname + (process.env.NODE_ENV === 'production' ? '/../migrations/*.js' : '/../migrations/*.ts')], // Add migration support
  entities: [__dirname + (process.env.NODE_ENV === 'production' ? '/../**/*.entity.js' : '/../**/*.entity.ts')],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  ssl: false,
}));
  