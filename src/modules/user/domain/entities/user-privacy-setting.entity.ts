/**
 * Enum for contact info visibility
 */
export enum ContactInfoVisibility {
  PUBLIC = 'public',
  PREMIUM_MEMBERS = 'premium_members',
  CONNECTIONS_ONLY = 'connections_only',
  PRIVATE = 'private',
}

/**
 * Enum for photo visibility
 */
export enum PhotoVisibility {
  PUBLIC = 'public',
  PREMIUM_MEMBERS = 'premium_members',
  CONNECTIONS_ONLY = 'connections_only',
  PRIVATE = 'private',
}

/**
 * Enum for message receiving preferences
 */
export enum MessageReceivePreference {
  EVERYONE = 'everyone',
  PREMIUM_MEMBERS = 'premium_members',
  CONNECTIONS_ONLY = 'connections_only',
  NO_ONE = 'no_one',
}

/**
 * UserPrivacySetting entity representing a user's privacy settings in the domain layer.
 *
 * @class UserPrivacySetting
 */
export class UserPrivacySetting {
  /**
   * The unique identifier of the user privacy setting record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this privacy setting belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * Who can see the user's contact information.
   *
   * @type {ContactInfoVisibility}
   */
  show_contact_info: ContactInfoVisibility;

  /**
   * Who can see the user's photos.
   *
   * @type {PhotoVisibility}
   */
  show_photos: PhotoVisibility;

  /**
   * Who can send messages to the user.
   *
   * @type {MessageReceivePreference}
   */
  receive_messages: MessageReceivePreference;

  /**
   * Whether profile visitors are visible to the user.
   *
   * @type {boolean}
   */
  profile_visitors_visible: boolean;

  /**
   * Whether the user's last seen status is visible to others.
   *
   * @type {boolean}
   */
  last_seen_visible: boolean;

  /**
   * The date and time when the privacy setting was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the privacy setting was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserPrivacySetting entity.
   *
   * @param id - The unique identifier of the user privacy setting record
   * @param user_id - The user ID this privacy setting belongs to
   * @param show_contact_info - Who can see the user's contact information
   * @param show_photos - Who can see the user's photos
   * @param receive_messages - Who can send messages to the user
   * @param profile_visitors_visible - Whether profile visitors are visible to the user
   * @param last_seen_visible - Whether the user's last seen status is visible to others
   * @param created_at - The date and time when the privacy setting was created
   * @param updated_at - The date and time when the privacy setting was last updated
   */
  constructor(
    id: string,
    user_id: string,
    show_contact_info: ContactInfoVisibility,
    show_photos: PhotoVisibility,
    receive_messages: MessageReceivePreference,
    profile_visitors_visible: boolean,
    last_seen_visible: boolean,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.show_contact_info = show_contact_info;
    this.show_photos = show_photos;
    this.receive_messages = receive_messages;
    this.profile_visitors_visible = profile_visitors_visible;
    this.last_seen_visible = last_seen_visible;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
