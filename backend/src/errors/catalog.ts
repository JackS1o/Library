export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class InvalidMongoId extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class EntityNotFound extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class DuplicateEntry extends ApiError {
  constructor(message: string) {
    super(message, 200);
  }
}
