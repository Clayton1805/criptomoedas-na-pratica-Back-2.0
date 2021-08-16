import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { BAD_REQUEST, UNAUTHORIZED } from '../utils/allStatusCode';

// reference: https://stackoverflow.com/questions/58938169/express-validator-fail-on-unknown-key

function checkIfExtraFields(validators: Array<any>, req: Request) {
  const allowedFields = new Set();
  validators
    .forEach(({ builder: { fields: [field] } }) => {
      if (/^(.|.*([^*]|[^.].))?$/.test(field)) allowedFields.add(field);
    });

  // Check for all common request inputs
  const requestInput = { ...req.query, ...req.params, ...req.body };
  const requestFields = Object.keys(requestInput);
  console.log(requestFields);
  if (requestFields.every((field) => allowedFields.has(field))) {
    return false;
  }
  return true;
}

export function validate(validators: Array<any>, allowExtraFields = false) {
  return async (req: Request, res: Response, next: NextFunction) => {
    // You can meka the validation optional
    if (!allowExtraFields) {
      // Fields validation
      const extraFields = checkIfExtraFields(validators, req);
      if (extraFields) return res.status(BAD_REQUEST).json({ errorMessage: 'extra fields are not allowed' });
    }
    // Type validation
    await Promise.all(validators.map((validator) => validator.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(BAD_REQUEST).json({ errors: errors.array() });
  };
}

export function validateAuthorization(validator: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validator.run(req);

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(UNAUTHORIZED).json({ errors: errors.array() });
  };
}
