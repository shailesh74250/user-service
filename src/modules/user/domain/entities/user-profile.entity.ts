/**
 * Enum for marital status
 */
export enum MaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
  SEPARATED = 'separated',
}

/**
 * Enum for gender
 */
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say',
}

/**
 * Enum for complexion
 */
export enum Complexion {
  FAIR = 'fair',
  MEDIUM = 'medium',
  OLIVE = 'olive',
  BROWN = 'brown',
  DARK = 'dark',
}

/**
 * Enum for body type
 */
export enum BodyType {
  SLIM = 'slim',
  ATHLETIC = 'athletic',
  AVERAGE = 'average',
  CURVY = 'curvy',
  HEAVY = 'heavy',
}

/**
 * Enum for profile visibility
 */
export enum ProfileVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
  FRIENDS_ONLY = 'friends_only',
  RESTRICTED = 'restricted',
}

/**
 * UserProfile entity representing a user profile in the domain layer.
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
   * The user ID this profile belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The first name of the user.
   *
   * @type {string}
   */
  first_name: string;

  /**
   * The last name of the user.
   *
   * @type {string}
   */
  last_name: string;

  /**
   * The display name of the user.
   *
   * @type {string}
   */
  display_name: string;

  /**
   * The date of birth of the user.
   *
   * @type {Date}
   */
  dob: Date;

  /**
   * The gender of the user.
   *
   * @type {Gender}
   */
  gender: Gender;

  /**
   * The marital status of the user.
   *
   * @type {MaritalStatus}
   */
  marital_status: MaritalStatus;

  /**
   * The height of the user in centimeters.
   *
   * @type {number}
   */
  height: number;

  /**
   * The weight of the user in kilograms.
   *
   * @type {number}
   */
  weight: number;

  /**
   * The complexion of the user.
   *
   * @type {Complexion}
   */
  complexion: Complexion;

  /**
   * The body type of the user.
   *
   * @type {BodyType}
   */
  body_type: BodyType;

  /**
   * The profile photo URL of the user.
   *
   * @type {string}
   */
  profile_photo_url: string;

  /**
   * About me description of the user.
   *
   * @type {string}
   */
  about_me: string;

  /**
   * The user ID who created this profile.
   *
   * @type {string}
   */
  created_by: string;

  /**
   * The profile visibility setting.
   *
   * @type {ProfileVisibility}
   */
  profile_visibility: ProfileVisibility;

  /**
   * The profile completion percentage.
   *
   * @type {number}
   */
  profile_completion_percentage: number;

  /**
   * The last active timestamp.
   *
   * @type {Date}
   */
  last_active: Date;

  /**
   * The date and time when the profile was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the profile was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserProfile entity.
   */
  constructor(
    id: string,
    user_id: string,
    first_name: string,
    last_name: string,
    display_name: string,
    dob: Date,
    gender: Gender,
    marital_status: MaritalStatus,
    height: number,
    weight: number,
    complexion: Complexion,
    body_type: BodyType,
    profile_photo_url: string,
    about_me: string,
    created_by: string,
    profile_visibility: ProfileVisibility,
    profile_completion_percentage: number,
    last_active: Date,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.display_name = display_name;
    this.dob = dob;
    this.gender = gender;
    this.marital_status = marital_status;
    this.height = height;
    this.weight = weight;
    this.complexion = complexion;
    this.body_type = body_type;
    this.profile_photo_url = profile_photo_url;
    this.about_me = about_me;
    this.created_by = created_by;
    this.profile_visibility = profile_visibility;
    this.profile_completion_percentage = profile_completion_percentage;
    this.last_active = last_active;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
