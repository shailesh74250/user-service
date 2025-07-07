import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { IUserProfileRepository } from '../../infrastructure/database/user-profile.repository.interface';
import { CreateUserProfileDto } from '../dto/create-user-profile.dto';
import { UpdateUserProfileDto } from '../dto/update-user-profile.dto';
import { UserProfile } from '../entities/user-profile.entity';

/**
 * UserProfileService handles all business logic related to user profiles.
 *
 * @service UserProfileService
 */
@Injectable()
export class UserProfileService {
  /**
   * Constructs a new instance of UserProfileService.
   *
   * @param userProfileRepository - The user profile repository to be used for database operations
   */
  constructor(
    @Inject('IUserProfileRepository')
    private readonly userProfileRepository: IUserProfileRepository,
  ) {}

  /**
   * Creates a new user profile.
   *
   * @param createUserProfileDto - Data Transfer Object for creating a user profile
   * @returns The created user profile
   */
  async create(createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
    return this.userProfileRepository.createUserProfile(createUserProfileDto);
  }

  /**
   * Retrieves all user profiles.
   *
   * @returns An array of user profiles
   */
  async findAll(): Promise<UserProfile[]> {
    return this.userProfileRepository.getAllUserProfiles();
  }

  /**
   * Retrieves a user profile by ID.
   *
   * @param id - The ID of the user profile to retrieve
   * @returns The user profile with the specified ID
   * @throws NotFoundException if the user profile is not found
   */
  async findById(id: string): Promise<UserProfile> {
    try {
      return await this.userProfileRepository.getUserProfileById(id);
    } catch (error) {
      throw new NotFoundException(`User profile with ID ${id} not found`);
    }
  }

  /**
   * Retrieves a user profile by user ID.
   *
   * @param userId - The user ID to retrieve profile for
   * @returns The user profile for the specified user
   * @throws NotFoundException if the user profile is not found
   */
  async findByUserId(userId: string): Promise<UserProfile> {
    try {
      return await this.userProfileRepository.getUserProfileByUserId(userId);
    } catch (error) {
      throw new NotFoundException(`User profile for user ID ${userId} not found`);
    }
  }

  /**
   * Updates a user profile by ID.
   *
   * @param id - The ID of the user profile to update
   * @param updateUserProfileDto - Data Transfer Object for updating a user profile
   * @returns The updated user profile
   * @throws NotFoundException if the user profile is not found
   */
  async update(id: string, updateUserProfileDto: UpdateUserProfileDto): Promise<UserProfile> {
    try {
      return await this.userProfileRepository.updateUserProfile(id, updateUserProfileDto);
    } catch (error) {
      throw new NotFoundException(`User profile with ID ${id} not found`);
    }
  }

  /**
   * Deletes a user profile by ID.
   *
   * @param id - The ID of the user profile to delete
   * @throws NotFoundException if the user profile is not found
   */
  async delete(id: string): Promise<void> {
    try {
      await this.userProfileRepository.deleteUserProfile(id);
    } catch (error) {
      throw new NotFoundException(`User profile with ID ${id} not found`);
    }
  }
}
