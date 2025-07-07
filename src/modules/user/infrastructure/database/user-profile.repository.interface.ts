import { CreateUserProfileDto } from '../../domain/dto/create-user-profile.dto';
import { UpdateUserProfileDto } from '../../domain/dto/update-user-profile.dto';
import { UserProfile } from '../../domain/entities/user-profile.entity';

/**
 * Interface for UserProfile repository to abstract database operations.
 *
 * @interface IUserProfileRepository
 */
export interface IUserProfileRepository {
  /**
   * Creates a new user profile.
   *
   * @param createUserProfileDto - Data Transfer Object for creating a user profile
   * @returns The created user profile
   */
  createUserProfile(createUserProfileDto: CreateUserProfileDto): Promise<UserProfile>;

  /**
   * Retrieves all user profiles.
   *
   * @returns An array of user profiles
   */
  getAllUserProfiles(): Promise<UserProfile[]>;

  /**
   * Retrieves a user profile by ID.
   *
   * @param id - The ID of the user profile to retrieve
   * @returns The user profile with the specified ID
   */
  getUserProfileById(id: string): Promise<UserProfile>;

  /**
   * Retrieves a user profile by user ID.
   *
   * @param userId - The user ID to retrieve profile for
   * @returns The user profile for the specified user
   */
  getUserProfileByUserId(userId: string): Promise<UserProfile>;

  /**
   * Updates a user profile by ID.
   *
   * @param id - The ID of the user profile to update
   * @param updateUserProfileDto - Data Transfer Object for updating a user profile
   * @returns The updated user profile
   */
  updateUserProfile(id: string, updateUserProfileDto: UpdateUserProfileDto): Promise<UserProfile>;

  /**
   * Deletes a user profile by ID.
   *
   * @param id - The ID of the user profile to delete
   */
  deleteUserProfile(id: string): Promise<void>;
}
