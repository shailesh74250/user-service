/**
 * Enum for photo type
 */
export enum PhotoType {
  PROFILE = 'profile',
  GALLERY = 'gallery',
  COVER = 'cover',
  VERIFICATION = 'verification',
  OTHER = 'other',
}

/**
 * UserPhoto entity representing a user photo in the domain layer.
 *
 * @class UserPhoto
 */
export class UserPhoto {
  /**
   * The unique identifier of the user photo.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this photo belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The URL of the photo.
   *
   * @type {string}
   */
  photo_url: string;

  /**
   * The type of photo.
   *
   * @type {PhotoType}
   */
  photo_type: PhotoType;

  /**
   * Whether this is the primary photo.
   *
   * @type {boolean}
   */
  is_primary: boolean;

  /**
   * Whether the photo is approved.
   *
   * @type {boolean}
   */
  is_approved: boolean;

  /**
   * The display order of the photo.
   *
   * @type {number}
   */
  display_order: number;

  /**
   * The date and time when the photo was uploaded.
   *
   * @type {Date}
   */
  uploaded_at: Date;

  /**
   * Constructs a new instance of the UserPhoto entity.
   *
   * @param id - The unique identifier of the user photo
   * @param user_id - The user ID this photo belongs to
   * @param photo_url - The URL of the photo
   * @param photo_type - The type of photo
   * @param is_primary - Whether this is the primary photo
   * @param is_approved - Whether the photo is approved
   * @param display_order - The display order of the photo
   * @param uploaded_at - The date and time when the photo was uploaded
   */
  constructor(
    id: string,
    user_id: string,
    photo_url: string,
    photo_type: PhotoType,
    is_primary: boolean,
    is_approved: boolean,
    display_order: number,
    uploaded_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.photo_url = photo_url;
    this.photo_type = photo_type;
    this.is_primary = is_primary;
    this.is_approved = is_approved;
    this.display_order = display_order;
    this.uploaded_at = uploaded_at;
  }
}