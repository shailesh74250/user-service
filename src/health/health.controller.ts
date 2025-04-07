// src/health/health.controller.ts
import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator, // only if you're using TypeORM
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      async () => this.http.pingCheck('google', 'https://www.google.com'), // Example external check
      async () => this.db.pingCheck('database'), // Your DB connection (if using TypeORM)
    ]);
  }
}
