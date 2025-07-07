import { Module } from '@nestjs/common';
import { UserController } from './api/rest/user.controller';
import { UserService } from './domain/services/user.service';
import { UserRepository } from './infrastructure/database/sql/repositories/user.repository';
import { UserDbEntity } from './infrastructure/database/sql/entities/user.db.entity';
import { UserProfileDbEntity } from './infrastructure/database/sql/entities/user-profile.db.entity';
import { UserProfileService } from './domain/services/user-profile.service';
import { UserProfileRepository } from './infrastructure/database/sql/repositories/user-profile.repository';
import { User } from './domain/entities/user.entity';
import { UserProfileController } from './api/rest/user-profile.controller';

/**
 * User Module
 *
 * This module handles all user-related operations, including API endpoints, services, and database interactions.
 *
 * @module UserModule
 */
@Module({
  imports: [],
  controllers: [
    /**
     * UserController
     *
     * Handles HTTP requests related to users.
     */
    UserController,
    UserProfileController,
  ],
  providers: [
    /**
     * UserService
     *
     * Provides business logic related to users.
     */
    UserService,
    UserProfileService,
    /**
     * UserRepository
     *
     * Handles database operations related to users.
     */
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IUserProfileRepository',
      useClass: UserProfileRepository,
    },
    {
      provide: 'UserDbEntity',
      useValue: UserDbEntity,
    },
    {
      provide: 'UserProfileDbEntity',
      useValue: UserProfileDbEntity,
    },
  ],
  exports: [UserService, UserProfileService],
})
export class UserModule {}
