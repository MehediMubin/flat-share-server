/* eslint-disable no-unused-vars */
enum UnauthorizedReason {
  JWT_EXPIRED = "JWT Expiry: The provided JWT (JSON Web Token) has expired.",
  INVALID_JWT = "Invalid JWT: The JWT provided is invalid or malformed.",
  UNDEFINED_JWT = "Undefined JWT: No JWT is provided in the request headers.",
  NOT_AUTHORIZED_USER = "Not Authorized User: The user does not possess the required permissions for the requested action or resource.",
  ACCESS_DENIED = "Access Denied: The user is attempting to access a resource without the necessary authorization.",
}

class UnauthorizedError extends Error {
  reason: UnauthorizedReason;

  constructor(reason: UnauthorizedReason) {
    super(reason);
    this.name = "UnauthorizedError";
    this.reason = reason;
  }
}

export default UnauthorizedError;
export { UnauthorizedReason };
