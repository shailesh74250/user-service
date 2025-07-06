/**
 * Enum for highest education levels
 */
export enum HighestEducation {
  HIGH_SCHOOL = 'high_school',
  DIPLOMA = 'diploma',
  BACHELORS = 'bachelors',
  MASTERS = 'masters',
  DOCTORATE = 'doctorate',
  PROFESSIONAL = 'professional',
  OTHER = 'other',
}

/**
 * UserEducation entity representing a user's educational and professional information in the domain layer.
 *
 * @class UserEducation
 */
export class UserEducation {
  /**
   * The unique identifier of the user education record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this education information belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The highest education level of the user.
   *
   * @type {HighestEducation}
   */
  heighest_education: HighestEducation;

  /**
   * Detailed education information of the user.
   *
   * @type {string}
   */
  education_details: string;

  /**
   * The occupation of the user.
   *
   * @type {string}
   */
  occupation: string;

  /**
   * The organization where the user works.
   *
   * @type {string}
   */
  organization: string;

  /**
   * The annual income of the user.
   *
   * @type {string}
   */
  annual_income: string;

  /**
   * The work location of the user.
   *
   * @type {string}
   */
  work_location: string;

  /**
   * The number of years of experience.
   *
   * @type {number}
   */
  experience_years: number;

  /**
   * The date and time when the education information was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the education information was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserEducation entity.
   *
   * @param id - The unique identifier of the user education record
   * @param user_id - The user ID this education information belongs to
   * @param heighest_education - The highest education level of the user
   * @param education_details - Detailed education information of the user
   * @param occupation - The occupation of the user
   * @param organization - The organization where the user works
   * @param annual_income - The annual income of the user
   * @param work_location - The work location of the user
   * @param experience_years - The number of years of experience
   * @param created_at - The date and time when the education information was created
   * @param updated_at - The date and time when the education information was last updated
   */
  constructor(
    id: string,
    user_id: string,
    heighest_education: HighestEducation,
    education_details: string,
    occupation: string,
    organization: string,
    annual_income: string,
    work_location: string,
    experience_years: number,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.heighest_education = heighest_education;
    this.education_details = education_details;
    this.occupation = occupation;
    this.organization = organization;
    this.annual_income = annual_income;
    this.work_location = work_location;
    this.experience_years = experience_years;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
