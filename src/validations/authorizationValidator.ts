import { header, Meta } from 'express-validator';

import { tokenValidation } from '../utils/JWT';

const funcValidationToken = (BearerToken: String, { req }: Meta) => {
  if (!BearerToken) throw new Error('Token is required.');

  const parts = BearerToken.split(' ');

  if (parts.length !== 2) throw new Error('Token malformed.');

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) throw new Error('Token malformed.');

  const payload = tokenValidation(token);

  if (!payload) throw new Error('Token invalid.');

  req.userId = payload.id;

  return true;
};

export const tokenValidator = header('authorization')
  .custom(funcValidationToken);
