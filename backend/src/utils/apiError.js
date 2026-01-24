
class ApiError extends Error {

  constructor(
    statusCode,
    message = "Something went wrong",
    isOperational = true,
    errors = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.isOperational = isOperational;
    this.errors = errors;

    // Capture stack trace (excluding constructor call)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;