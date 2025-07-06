/**
 * Enum for family type
 */
export enum FamilyType {
  NUCLEAR = 'nuclear',
  JOINT = 'joint',
  EXTENDED = 'extended',
  SINGLE_PARENT = 'single_parent',
}

/**
 * Enum for family status
 */
export enum FamilyStatus {
  COMPLETE = 'complete',
  BROKEN = 'broken',
  SEPARATED = 'separated',
  DIVORCED = 'divorced',
}

/**
 * Enum for family value
 */
export enum FamilyValue {
  TRADITIONAL = 'traditional',
  MODERN = 'modern',
  LIBERAL = 'liberal',
  CONSERVATIVE = 'conservative',
}

/**
 * UserFamily entity representing a user's family information in the domain layer.
 *
 * @class UserFamily
 */
export class UserFamily {
  /**
   * The unique identifier of the user family record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The foreign key reference to the user.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The name of the father.
   *
   * @type {string}
   */
  father_name: string;

  /**
   * The occupation of the father.
   *
   * @type {string}
   */
  father_occupation: string;

  /**
   * The name of the mother.
   *
   * @type {string}
   */
  mother_name: string;

  /**
   * The occupation of the mother.
   *
   * @type {string}
   */
  mother_occupation: string;

  /**
   * The number of brothers.
   *
   * @type {number}
   */
  brothers_count: number;

  /**
   * The number of sisters.
   *
   * @type {number}
   */
  sisters_count: number;

  /**
   * Whether any brothers are married.
   *
   * @type {boolean}
   */
  brothers_married: boolean;

  /**
   * Whether any sisters are married.
   *
   * @type {boolean}
   */
  sisters_married: boolean;

  /**
   * The type of family.
   *
   * @type {FamilyType}
   */
  family_type: FamilyType;

  /**
   * The status of the family.
   *
   * @type {FamilyStatus}
   */
  family_status: FamilyStatus;

  /**
   * The values of the family.
   *
   * @type {FamilyValue}
   */
  family_value: FamilyValue;

  /**
   * The date and time when the family record was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the family record was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserFamily entity.
   *
   * @param id - The unique identifier of the user family record
   * @param user_id - The foreign key reference to the user
   * @param father_name - The name of the father
   * @param father_occupation - The occupation of the father
   * @param mother_name - The name of the mother
   * @param mother_occupation - The occupation of the mother
   * @param brothers_count - The number of brothers
   * @param sisters_count - The number of sisters
   * @param brothers_married - Whether any brothers are married
   * @param sisters_married - Whether any sisters are married
   * @param family_type - The type of family
   * @param family_status - The status of the family
   * @param family_value - The values of the family
   * @param created_at - The date and time when the family record was created
   * @param updated_at - The date and time when the family record was last updated
   */
  constructor(
    id: string,
    user_id: string,
    father_name: string,
    father_occupation: string,
    mother_name: string,
    mother_occupation: string,
    brothers_count: number,
    sisters_count: number,
    brothers_married: boolean,
    sisters_married: boolean,
    family_type: FamilyType,
    family_status: FamilyStatus,
    family_value: FamilyValue,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.father_name = father_name;
    this.father_occupation = father_occupation;
    this.mother_name = mother_name;
    this.mother_occupation = mother_occupation;
    this.brothers_count = brothers_count;
    this.sisters_count = sisters_count;
    this.brothers_married = brothers_married;
    this.sisters_married = sisters_married;
    this.family_type = family_type;
    this.family_status = family_status;
    this.family_value = family_value;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
