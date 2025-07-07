import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

/**
 * @class ResponseFormatInterceptor
 * @description Interceptor that formats response body into standard format and masks sensitive data
 */
@Injectable()
export class ResponseFormatInterceptor implements NestInterceptor {
  private readonly sensitiveFields = [
    'password',
    'resetToken',
    'secret',
    'key',
    'hash',
    'salt',
  ];

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response: Response = context.switchToHttp().getResponse<Response>();
    const request = context.switchToHttp().getRequest();
    
    return next.handle().pipe(
      map((data) => {
        const statusCode = response.statusCode;
        const isSuccess = statusCode >= 200 && statusCode < 300;
        
        // Don't mask tokens for auth endpoints
        const isAuthEndpoint = request.url?.includes('/auth/login') || 
                              request.url?.includes('/auth/refresh');
        
        // Mask sensitive data only if not an auth endpoint
        const processedData = isAuthEndpoint ? data : this.maskSensitiveData(data);
        
        // Format response body
        return {
          success: isSuccess,
          statusCode,
          timestamp: new Date().toISOString(),
          data: processedData,
          message: this.extractMessage(data),
        };
      }),
    );
  }

  /**
   * Recursively masks sensitive data in the response
   */
  private maskSensitiveData(obj: any): any {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.maskSensitiveData(item));
    }

    if (typeof obj === 'object') {
      const masked = { ...obj };
      
      for (const key in masked) {
        if (this.isSensitiveField(key)) {
          masked[key] = this.maskValue(masked[key]);
        } else if (typeof masked[key] === 'object') {
          masked[key] = this.maskSensitiveData(masked[key]);
        }
      }
      
      return masked;
    }

    return obj;
  }

  /**
   * Checks if a field name is sensitive
   */
  private isSensitiveField(fieldName: string): boolean {
    return this.sensitiveFields.some(sensitive => 
      fieldName.toLowerCase().includes(sensitive.toLowerCase())
    );
  }

  /**
   * Masks the value based on its type
   */
  private maskValue(value: any): string {
    if (typeof value === 'string' && value.length > 0) {
      if (value.length <= 4) {
        return '****';
      }
      return value.substring(0, 2) + '*'.repeat(value.length - 4) + value.substring(value.length - 2);
    }
    return '****';
  }

  /**
   * Extracts message from response data
   */
  private extractMessage(data: any): string {
    if (data && typeof data === 'object') {
      if (data.message) {
        return data.message;
      }
      if (data.error) {
        return data.error;
      }
    }
    return 'Success';
  }
}
