/**
 * Enum for religion
 */
export enum Religion {
  HINDU = 'hindu',
  MUSLIM = 'muslim',
  CHRISTIAN = 'christian',
  SIKH = 'sikh',
  BUDDHIST = 'buddhist',
  JAIN = 'jain',
  PARSI = 'parsi',
  JEWISH = 'jewish',
  OTHER = 'other',
  NO_RELIGION = 'no_religion',
}

/**
 * Enum for zodiac signs
 */
export enum ZodiacSign {
  ARIES = 'aries',
  TAURUS = 'taurus',
  GEMINI = 'gemini',
  CANCER = 'cancer',
  LEO = 'leo',
  VIRGO = 'virgo',
  LIBRA = 'libra',
  SCORPIO = 'scorpio',
  SAGITTARIUS = 'sagittarius',
  CAPRICORN = 'capricorn',
  AQUARIUS = 'aquarius',
  PISCES = 'pisces',
}

/**
 * UserReligious entity representing a user's religious information in the domain layer.
 *
 * @class UserReligious
 */
export class UserReligious {
  /**
   * The unique identifier of the user religious record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this religious information belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The religion of the user.
   *
   * @type {Religion}
   */
  religion: Religion;

  /**
   * The caste of the user.
   *
   * @type {string}
   */
  caste: string;

  /**
   * The sub-caste of the user.
   *
   * @type {string}
   */
  sub_caste: string;

  /**
   * The gothra of the user.
   *
   * @type {string}
   */
  gothra: string;

  /**
   * The mother tongue of the user.
   *
   * @type {string}
   */
  mother_tongue: string;

  /**
   * The star/nakshatra of the user.
   *
   * @type {string}
   */
  star: string;

  /**
   * The zodiac sign of the user.
   *
   * @type {ZodiacSign}
   */
  zodiac_sign: ZodiacSign;

  /**
   * The date and time when the religious information was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the religious information was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserReligious entity.
   *
   * @param id - The unique identifier of the user religious record
   * @param user_id - The user ID this religious information belongs to
   * @param religion - The religion of the user
   * @param caste - The caste of the user
   * @param sub_caste - The sub-caste of the user
   * @param gothra - The gothra of the user
   * @param mother_tongue - The mother tongue of the user
   * @param star - The star/nakshatra of the user
   * @param zodiac_sign - The zodiac sign of the user
   * @param created_at - The date and time when the religious information was created
   * @param updated_at - The date and time when the religious information was last updated
   */
  constructor(
    id: string,
    user_id: string,
    religion: Religion,
    caste: string,
    sub_caste: string,
    gothra: string,
    mother_tongue: string,
    star: string,
    zodiac_sign: ZodiacSign,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.religion = religion;
    this.caste = caste;
    this.sub_caste = sub_caste;
    this.gothra = gothra;
    this.mother_tongue = mother_tongue;
    this.star = star;
    this.zodiac_sign = zodiac_sign;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
