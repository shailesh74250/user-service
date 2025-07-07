/**
 * Enum for verification type
 */
export enum VerificationType {
  EMAIL = 'email',
  PHONE = 'phone',
  IDENTITY_DOCUMENT = 'identity_document',
  ADDRESS_PROOF = 'address_proof',
  INCOME_PROOF = 'income_proof',
  PHOTO_VERIFICATION = 'photo_verification',
  OTHER = 'other',
}

/**
 * Enum for verification status
 */
export enum VerificationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
  SUBMITTED = 'submitted',
}

/**
 * UserVerification entity representing a user verification record in the domain layer.
 *
 * @class UserVerification
 */
export class UserVerification {
  /**
   * The unique identifier of the user verification record.
   *
   * @type {string}
   */
  id: string;

  /**
   * The user ID this verification belongs to.
   *
   * @type {string}
   */
  user_id: string;

  /**
   * The type of verification.
   *
   * @type {VerificationType}
   */
  verification_type: VerificationType;

  /**
   * The status of the verification.
   *
   * @type {VerificationStatus}
   */
  verification_status: VerificationStatus;

  /**
   * The URL of the document uploaded for verification.
   *
   * @type {string}
   */
  document_url: string;

  /**
   * The admin/staff ID who verified this document.
   *
   * @type {string}
   */
  verified_by: string;

  /**
   * The date and time when the verification was approved/rejected.
   *
   * @type {Date}
   */
  verified_at: Date;

  /**
   * The reason for rejection if the verification was rejected.
   *
   * @type {string}
   */
  rejection_reason: string;

  /**
   * The date and time when the verification record was created.
   *
   * @type {Date}
   */
  created_at: Date;

  /**
   * The date and time when the verification record was last updated.
   *
   * @type {Date}
   */
  updated_at: Date;

  /**
   * Constructs a new instance of the UserVerification entity.
   *
   * @param id - The unique identifier of the user verification record
   * @param user_id - The user ID this verification belongs to
   * @param verification_type - The type of verification
   * @param verification_status - The status of the verification
   * @param document_url - The URL of the document uploaded for verification
   * @param verified_by - The admin/staff ID who verified this document
   * @param verified_at - The date and time when the verification was approved/rejected
   * @param rejection_reason - The reason for rejection if the verification was rejected
   * @param created_at - The date and time when the verification record was created
   * @param updated_at - The date and time when the verification record was last updated
   */
  constructor(
    id: string,
    user_id: string,
    verification_type: VerificationType,
    verification_status: VerificationStatus,
    document_url: string,
    verified_by: string,
    verified_at: Date,
    rejection_reason: string,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.verification_type = verification_type;
    this.verification_status = verification_status;
    this.document_url = document_url;
    this.verified_by = verified_by;
    this.verified_at = verified_at;
    this.rejection_reason = rejection_reason;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
