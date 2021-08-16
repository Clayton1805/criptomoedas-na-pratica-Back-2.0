import jwt from 'jsonwebtoken';

const secret = process.env.SECRET || 'secret_Aleatória_123';

const headers = {
  algorithm: 'HS256',
};

export const createToken = (payload) => jwt.sign(payload, secret, headers);
export const tokenValidation = (token) => jwt.decode(token, secret);
export const getTokenPayload = (token) => jwt.decode(token);
