import { MaritalStatus } from './user-profile.entity';
import { Religion } from './user-religious.entity';
import { HighestEducation } from './user-education.entity';
import { Diet } from './user-lifestyle.entity';

/**
 * Enum for income range
 */
export enum IncomeRange {
  BELOW_2_LAKHS = 'below_2_lakhs',
  TWO_TO_FIVE_LAKHS = '2_to_5_lakhs',
  FIVE_TO_TEN_LAKHS = '5_to_10_lakhs',
  TEN_TO_TWENTY_LAKHS = '10_to_20_lakhs',
  TWENTY_TO_FIFTY_LAKHS = '20_to_50_lakhs',
  FIFTY_LAKHS_TO_ONE_CRORE = '50_lakhs_to_1_crore',
  ABOVE_ONE_CRORE = 'above_1_crore',
  NO_PREFERENCE = 'no_preference',
}

/**
 * UserPartnerPreference entity representing a user's partner preference in the domain layer.
 *
 * @class UserPartnerPreference
 */
export class UserPartnerPreference {
  /**
   * The unique identifier of the user partner preference record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this partner preference belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The minimum age preference for partner.
   *
   * @type {number}
   */
  min_age: number;

  /**
   * The maximum age preference for partner.
   *
   * @type {number}
   */
  max_age: number;

  /**
   * The minimum height preference for partner in centimeters.
   *
   * @type {number}
   */
  min_height: number;

  /**
   * The maximum height preference for partner in centimeters.
   *
   * @type {number}
   */
  max_height: number;

  /**
   * The marital status preference for partner.
   *
   * @type {MaritalStatus}
   */
  marital_status: MaritalStatus;

  /**
   * The religion preferences for partner.
   *
   * @type {Religion[]}
   */
  religion: Religion[];

  /**
   * The caste preferences for partner.
   *
   * @type {string[]}
   */
  caste: string[];

  /**
   * The mother tongue preferences for partner.
   *
   * @type {string[]}
   */
  mother_tongue: string[];

  /**
   * The education preferences for partner.
   *
   * @type {HighestEducation[]}
   */
  education: HighestEducation[];

  /**
   * The occupation preferences for partner.
   *
   * @type {string[]}
   */
  occupation: string[];

  /**
   * The location preferences for partner.
   *
   * @type {string[]}
   */
  location: string[];

  /**
   * The income range preference for partner.
   *
   * @type {string}
   */
  income_range: string;

  /**
   * The diet preferences for partner.
   *
   * @type {Diet[]}
   */
  diet_preference: Diet[];

  /**
   * The date and time when the partner preference was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the partner preference was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserPartnerPreference entity.
   *
   * @param id - The unique identifier of the user partner preference record
   * @param user_id - The user ID this partner preference belongs to
   * @param min_age - The minimum age preference for partner
   * @param max_age - The maximum age preference for partner
   * @param min_height - The minimum height preference for partner in centimeters
   * @param max_height - The maximum height preference for partner in centimeters
   * @param marital_status - The marital status preference for partner
   * @param religion - The religion preferences for partner
   * @param caste - The caste preferences for partner
   * @param mother_tongue - The mother tongue preferences for partner
   * @param education - The education preferences for partner
   * @param occupation - The occupation preferences for partner
   * @param location - The location preferences for partner
   * @param income_range - The income range preference for partner
   * @param diet_preference - The diet preferences for partner
   * @param created_at - The date and time when the partner preference was created
   * @param updated_at - The date and time when the partner preference was last updated
   */
  constructor(
    id: string,
    user_id: string,
    min_age: number,
    max_age: number,
    min_height: number,
    max_height: number,
    marital_status: MaritalStatus,
    religion: Religion[],
    caste: string[],
    mother_tongue: string[],
    education: HighestEducation[],
    occupation: string[],
    location: string[],
    income_range: string,
    diet_preference: Diet[],
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.min_age = min_age;
    this.max_age = max_age;
    this.min_height = min_height;
    this.max_height = max_height;
    this.marital_status = marital_status;
    this.religion = religion;
    this.caste = caste;
    this.mother_tongue = mother_tongue;
    this.education = education;
    this.occupation = occupation;
    this.location = location;
    this.income_range = income_range;
    this.diet_preference = diet_preference;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
