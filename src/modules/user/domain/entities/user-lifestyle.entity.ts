/**
 * Enum for diet preference
 */
export enum Diet {
  VEGETARIAN = 'vegetarian',
  NON_VEGETARIAN = 'non_vegetarian',
  VEGAN = 'vegan',
  EGGETARIAN = 'eggetarian',
  JAIN = 'jain',
  OCCASIONAL_NON_VEG = 'occasional_non_veg',
}

/**
 * Enum for smoking habits
 */
export enum Smoking {
  NEVER = 'never',
  OCCASIONALLY = 'occasionally',
  REGULARLY = 'regularly',
  TRYING_TO_QUIT = 'trying_to_quit',
  SOCIALLY = 'socially',
}

/**
 * Enum for drinking habits
 */
export enum Drinking {
  NEVER = 'never',
  OCCASIONALLY = 'occasionally',
  REGULARLY = 'regularly',
  SOCIALLY = 'socially',
  TEETOTALER = 'teetotaler',
}

/**
 * UserLifestyle entity representing a user's lifestyle information in the domain layer.
 *
 * @class UserLifestyle
 */
export class UserLifestyle {
  /**
   * The unique identifier of the user lifestyle record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this lifestyle information belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The diet preference of the user.
   *
   * @type {Diet}
   */
  diet: Diet;

  /**
   * The smoking habits of the user.
   *
   * @type {Smoking}
   */
  smoking: Smoking;

  /**
   * The drinking habits of the user.
   *
   * @type {Drinking}
   */
  drinking: Drinking;

  /**
   * The hobbies of the user.
   *
   * @type {string[]}
   */
  hobbies: string[];

  /**
   * The interests of the user.
   *
   * @type {string[]}
   */
  interests: string[];

  /**
   * The sports activities of the user.
   *
   * @type {string[]}
   */
  sports: string[];

  /**
   * The music preferences of the user.
   *
   * @type {string[]}
   */
  music_preference: string[];

  /**
   * The date and time when the lifestyle information was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the lifestyle information was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserLifestyle entity.
   *
   * @param id - The unique identifier of the user lifestyle record
   * @param user_id - The user ID this lifestyle information belongs to
   * @param diet - The diet preference of the user
   * @param smoking - The smoking habits of the user
   * @param drinking - The drinking habits of the user
   * @param hobbies - The hobbies of the user
   * @param interests - The interests of the user
   * @param sports - The sports activities of the user
   * @param music_preference - The music preferences of the user
   * @param created_at - The date and time when the lifestyle information was created
   * @param updated_at - The date and time when the lifestyle information was last updated
   */
  constructor(
    id: string,
    user_id: string,
    diet: Diet,
    smoking: Smoking,
    drinking: Drinking,
    hobbies: string[],
    interests: string[],
    sports: string[],
    music_preference: string[],
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.diet = diet;
    this.smoking = smoking;
    this.drinking = drinking;
    this.hobbies = hobbies;
    this.interests = interests;
    this.sports = sports;
    this.music_preference = music_preference;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
