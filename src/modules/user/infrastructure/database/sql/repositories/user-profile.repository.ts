import { Inject, Injectable } from '@nestjs/common';
import { UserProfileDbEntity } from '../entities/user-profile.db.entity';
import { CreateUserProfileDto } from '../../../../domain/dto/create-user-profile.dto';
import { UpdateUserProfileDto } from '../../../../domain/dto/update-user-profile.dto';
import { IUserProfileRepository } from '../../user-profile.repository.interface';
import { UserProfile } from '../../../../domain/entities/user-profile.entity';
import { UserProfileMapper } from './../mapper/user-profile.mapper';

/**
 * UserProfileRepository handles all database operations related to user profiles.
 *
 * @repository UserProfileRepository
 */
@Injectable()
export class UserProfileRepository implements IUserProfileRepository {
  constructor(
    @Inject('UserProfileDbEntity')
    private readonly userProfileModel: typeof UserProfileDbEntity,
  ) {}

  /**
   * Creates a new user profile.
   *
   * @param createUserProfileDto - Data Transfer Object for creating a user profile
   * @returns The created user profile
   */
  async createUserProfile(createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
    const userProfileDbEntity = UserProfileMapper.toDbEntityFromCreateDto(createUserProfileDto);
    const userProfile = await this.userProfileModel.create(userProfileDbEntity as UserProfileDbEntity);
    return UserProfileMapper.toDomain(userProfile);
  }

  /**
   * Retrieves all user profiles.
   *
   * @returns An array of user profiles
   */
  async getAllUserProfiles(): Promise<UserProfile[]> {
    const userProfiles = await this.userProfileModel.findAll();
    return userProfiles.map((userProfile) => UserProfileMapper.toDomain(userProfile));
  }

  /**
   * Retrieves a user profile by ID.
   *
   * @param id - The ID of the user profile to retrieve
   * @returns The user profile with the specified ID
   */
  async getUserProfileById(id: string): Promise<UserProfile> {
    const userProfile = await this.userProfileModel.findByPk(id);
    if (!userProfile) {
      throw new Error(`User profile with ID ${id} not found`);
    }
    return UserProfileMapper.toDomain(userProfile);
  }

  /**
   * Retrieves a user profile by user ID.
   *
   * @param userId - The user ID to retrieve profile for
   * @returns The user profile for the specified user
   */
  async getUserProfileByUserId(userId: string): Promise<UserProfile> {
    const userProfile = await this.userProfileModel.findOne({
      where: { user_id: userId }
    });
    if (!userProfile) {
      throw new Error(`User profile for user ID ${userId} not found`);
    }
    return UserProfileMapper.toDomain(userProfile);
  }

  /**
   * Updates a user profile by ID.
   *
   * @param id - The ID of the user profile to update
   * @param updateUserProfileDto - Data Transfer Object for updating a user profile
   * @returns The updated user profile
   */
  async updateUserProfile(id: string, updateUserProfileDto: UpdateUserProfileDto): Promise<UserProfile> {
    const userProfileDbEntity = UserProfileMapper.toDbEntityFromUpdateDto(updateUserProfileDto);
    const [numberOfAffectedRows, [updatedUserProfile]] = await this.userProfileModel.update(
      userProfileDbEntity,
      {
        where: { id },
        returning: true,
      },
    );
    if (numberOfAffectedRows === 0) {
      throw new Error(`User profile with ID ${id} not found`);
    }
    return UserProfileMapper.toDomain(updatedUserProfile);
  }

  /**
   * Deletes a user profile by ID.
   *
   * @param id - The ID of the user profile to delete
   */
  async deleteUserProfile(id: string): Promise<void> {
    const result = await this.userProfileModel.destroy({ where: { id } });
    if (result === 0) {
      throw new Error(`User profile with ID ${id} not found`);
    }
  }
}
