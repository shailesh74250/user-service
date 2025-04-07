import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import {Request, Response, NextFunction} from 'express'

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];
    const VALID_API_KEY = process.env.API_KEY || 'api_key';

    if(!apiKey || apiKey !== VALID_API_KEY) {
      throw new UnauthorizedException('Invalid or missing API key');
    }
    next();
  }
}