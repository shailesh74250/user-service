import { registerAs } from "@nestjs/config";
import { User } from "src/users/entities/user.entity";
console.log(process.env.NODE_ENV)
export default registerAs('database', () => ({
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'user_db',
  autoLoadEntities: true,
  migrations: [__dirname + '/../../../migrations/*.ts'], // Add migration support
  entities: [__dirname + (process.env.NODE_ENV === 'production' ? '/../**/*.entity.js' : '/../**/*.entity.ts')],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  ssl: false,
}));
  