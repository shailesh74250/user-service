import { CreateUserDto } from '../../../../domain/dto/create-user.dto';
import { UpdateUserDto } from '../../../../domain/dto/update-user.dto';
import { UserDbEntity } from '../entities/user.db.entity';
import { User } from '../../../../domain/entities/user.entity';

/**
 * UserMapper handles the mapping between DTOs and database entities.
 *
 * @class UserMapper
 */
export class UserMapper {
  /**
   * Maps a CreateUserDto to a UserDbEntity.
   *
   * @param createUserDto - Data Transfer Object for creating a user
   * @returns A partial UserDbEntity with the mapped properties
   */
  static toDbEntityFromCreateDto(
    createUserDto: CreateUserDto,
  ): Partial<UserDbEntity> {
    return {
      email: createUserDto.email,
      password: createUserDto.password,
      phone: createUserDto.phone,
      email_verified: createUserDto.email_verified || false,
      phone_verified: createUserDto.phone_verified || false,
      account_status: createUserDto.account_status,
      registration_for: createUserDto.registration_for,
    };
  }

  /**
   * Maps an UpdateUserDto to a UserDbEntity.
   *
   * @param updateUserDto - Data Transfer Object for updating a user
   * @returns A partial UserDbEntity with the mapped properties
   */
  static toDbEntityFromUpdateDto(
    updateUserDto: UpdateUserDto,
  ): Partial<UserDbEntity> {
    return {
      email: updateUserDto.email,
      password: updateUserDto.password,
      phone: updateUserDto.phone,
      email_verified: updateUserDto.email_verified,
      phone_verified: updateUserDto.phone_verified,
      account_status: updateUserDto.account_status,
      registration_for: updateUserDto.registration_for,
    };
  }

  /**
   * Maps a UserDbEntity to a User domain entity.
   *
   * @param userDbEntity - The UserDbEntity to convert
   * @returns The User domain entity
   */
  static toDomain(userDbEntity: UserDbEntity): User {
    const { 
      id, 
      email, 
      password, 
      phone,
      email_verified,
      phone_verified,
      account_status,
      registration_for,
      created_at, 
      updated_at 
    } = userDbEntity;
    
    return new User(
      id, 
      email, 
      password, 
      phone,
      email_verified,
      phone_verified,
      account_status,
      registration_for,
      created_at, 
      updated_at
    );
  }
}
