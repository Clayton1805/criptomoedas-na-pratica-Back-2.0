import { ValidationChain, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { BAD_REQUEST, UNAUTHORIZED } from '../utils/allStatusCode';

export function validate(validators: Array<ValidationChain>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validators.map((validator) => validator.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(BAD_REQUEST).json({ errors: errors.array() });
  };
}

export function validateAuthorization(validator: ValidationChain) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validator.run(req);

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(UNAUTHORIZED).json({ errors: errors.array() });
  };
}
