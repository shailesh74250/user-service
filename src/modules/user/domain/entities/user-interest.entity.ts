export enum InterestType {
  LIKE = 'like',
  SUPER_LIKE = 'super_like',
  PASS = 'pass',
  MESSAGE = 'message'
}

export enum InterestStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  EXPIRED = 'expired'
}

/**
 * UserInterest entity representing user interests in the domain layer.
 *
 * @class UserInterest
 */
export class UserInterest {
  /**
   * The unique identifier of the user interest.
   *
   * @type {string}
   */
  id: string;

  /**
   * The sender user ID.
   *
   * @type {string}
   */
  sender_id: string;

  /**
   * The receiver user ID.
   *
   * @type {string}
   */
  receiver_id: string;

  /**
   * The type of interest.
   *
   * @type {InterestType}
   */
  interest_type: InterestType;

  /**
   * The status of the interest.
   *
   * @type {InterestStatus}
   */
  status: InterestStatus;

  /**
   * The message content.
   *
   * @type {string}
   */
  message: string;

  /**
   * The date and time when the interest was sent.
   *
   * @type {Date}
   */
  sent_at: Date;

  /**
   * The date and time when the interest was viewed.
   *
   * @type {Date}
   */
  viewed_at: Date;

  /**
   * The date and time when the interest was responded to.
   *
   * @type {Date}
   */
  responded_at: Date;

  /**
   * The date and time when the interest expires.
   *
   * @type {Date}
   */
  expires_at: Date;

  /**
   * The date and time when the interest was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the interest was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserInterest entity.
   */
  constructor(
    id: string,
    sender_id: string,
    receiver_id: string,
    interest_type: InterestType,
    status: InterestStatus,
    message: string,
    sent_at: Date,
    viewed_at: Date,
    responded_at: Date,
    expires_at: Date,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.sender_id = sender_id;
    this.receiver_id = receiver_id;
    this.interest_type = interest_type;
    this.status = status;
    this.message = message;
    this.sent_at = sent_at;
    this.viewed_at = viewed_at;
    this.responded_at = responded_at;
    this.expires_at = expires_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
