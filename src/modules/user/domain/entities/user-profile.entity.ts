/**
 * UserProfile entity representing a user's profile in the domain layer.
 *
 * @class UserProfile
 */
export class UserProfile {
  /**
   * The unique identifier of the user profile.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user id (foreign key).
   *
   * @type {string}
   */
  userId: string;

  /**
   * The phone number of the user.
   *
   * @type {string}
   */
  phone: string;

  /**
   * The status of the user.
   *
   * @type {string}
   */
  status: string;

  /**
   * The photo URL or path of the user.
   *
   * @type {string}
   */
  photo: string;

  /**
   * The gender of the user.
   *
   * @type {string}
   */
  gender: string;

  /**
   * The hobbies of the user.
   *
   * @type {string[]}
   */
  hobbies: string[];

  /**
   * The languages spoken by the user.
   *
   * @type {string[]}
   */
  languages: string[];

  /**
   * The date of birth of the user.
   *
   * @type {Date}
   */
  dob: Date;

  /**
   * Constructs a new instance of the UserProfile entity.
   *
   * @param id - The unique identifier of the user profile
   * @param userId - The user id (foreign key)
   * @param phone - The phone number of the user
   * @param status - The status of the user
   * @param photo - The photo URL or path of the user
   * @param gender - The gender of the user
   * @param hobbies - The hobbies of the user
   * @param languages - The languages spoken by the user
   * @param dob - The date of birth of the user
   */
  constructor(
    id: string,
    userId: string,
    phone: string,
    status: string,
    photo: string,
    gender: string,
    hobbies: string[],
    languages: string[],
    dob: Date,
  ) {
    this.id = id;
    this.userId = userId;
    this.phone = phone;
    this.status = status;
    this.photo = photo;
    this.gender = gender;
    this.hobbies = hobbies;
    this.languages = languages;
    this.dob = dob;
  }
}
