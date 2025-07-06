/**
 * Enum for account status
 */
export enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  PENDING = 'pending',
}

/**
 * Enum for registration purpose
 */
export enum RegistrationFor {
  PERSONAL = 'personal',
  BUSINESS = 'business',
  ORGANIZATION = 'organization',
  OTHER = 'other',
}

/**
 * User entity representing a user in the domain layer.
 *
 * @class User
 */
export class User {
  /**
   * The unique identifier of the user.
   *
   * @type {string}
   */
  id: string;

  /**
   * The email of the user.
   *
   * @type {string}
   */
  email: string;

  /**
   * The password of the user.
   *
   * @type {string}
   */
  password: string;

  /**
   * The phone number of the user.
   *
   * @type {string}
   */
  phone: string;

  /**
   * Whether the email is verified.
   *
   * @type {boolean}
   */
  email_verified: boolean;

  /**
   * Whether the phone is verified.
   *
   * @type {boolean}
   */
  phone_verified: boolean;

  /**
   * The account status of the user.
   *
   * @type {AccountStatus}
   */
  account_status: AccountStatus;

  /**
   * The registration purpose of the user.
   *
   * @type {RegistrationFor}
   */
  registration_for: RegistrationFor;

  /**
   * The date and time when the user was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the user was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the User entity.
   *
   * @param id - The unique identifier of the user
   * @param email - The email of the user
   * @param password - The password of the user
   * @param phone - The phone number of the user
   * @param email_verified - Whether the email is verified
   * @param phone_verified - Whether the phone is verified
   * @param account_status - The account status of the user
   * @param registration_for - The registration purpose of the user
   * @param created_at - The date and time when the user was created
   * @param updated_at - The date and time when the user was last updated
   */
  constructor(
    id: string,
    email: string,
    password: string,
    phone: string,
    email_verified: boolean,
    phone_verified: boolean,
    account_status: AccountStatus,
    registration_for: RegistrationFor,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.email_verified = email_verified;
    this.phone_verified = phone_verified;
    this.account_status = account_status;
    this.registration_for = registration_for;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
