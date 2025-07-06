/**
 * UserLocation entity representing a user's location information in the domain layer.
 *
 * @class UserLocation
 */
export class UserLocation {
  /**
   * The unique identifier of the user location record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this location information belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The current country of the user.
   *
   * @type {string}
   */
  current_country: string;

  /**
   * The current state of the user.
   *
   * @type {string}
   */
  current_state: string;

  /**
   * The current city of the user.
   *
   * @type {string}
   */
  current_city: string;

  /**
   * The current address of the user.
   *
   * @type {string}
   */
  current_address: string;

  /**
   * The permanent country of the user.
   *
   * @type {string}
   */
  permanent_country: string;

  /**
   * The permanent state of the user.
   *
   * @type {string}
   */
  permanent_state: string;

  /**
   * The permanent city of the user.
   *
   * @type {string}
   */
  permanent_city: string;

  /**
   * The permanent address of the user.
   *
   * @type {string}
   */
  permanent_address: string;

  /**
   * Whether the user is willing to relocate.
   *
   * @type {boolean}
   */
  willing_to_relocate: boolean;

  /**
   * The date and time when the location information was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the location information was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserLocation entity.
   *
   * @param id - The unique identifier of the user location record
   * @param user_id - The user ID this location information belongs to
   * @param current_country - The current country of the user
   * @param current_state - The current state of the user
   * @param current_city - The current city of the user
   * @param current_address - The current address of the user
   * @param permanent_country - The permanent country of the user
   * @param permanent_state - The permanent state of the user
   * @param permanent_city - The permanent city of the user
   * @param permanent_address - The permanent address of the user
   * @param willing_to_relocate - Whether the user is willing to relocate
   * @param created_at - The date and time when the location information was created
   * @param updated_at - The date and time when the location information was last updated
   */
  constructor(
    id: string,
    user_id: string,
    current_country: string,
    current_state: string,
    current_city: string,
    current_address: string,
    permanent_country: string,
    permanent_state: string,
    permanent_city: string,
    permanent_address: string,
    willing_to_relocate: boolean,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.current_country = current_country;
    this.current_state = current_state;
    this.current_city = current_city;
    this.current_address = current_address;
    this.permanent_country = permanent_country;
    this.permanent_state = permanent_state;
    this.permanent_city = permanent_city;
    this.permanent_address = permanent_address;
    this.willing_to_relocate = willing_to_relocate;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
