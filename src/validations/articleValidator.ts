import { body } from 'express-validator';
import { CRIPTO_NAMES } from '../config';
import { isStringMessage, notEmptyMessage } from '../utils/messagesValidators';

export const articlePostValidators = [
  body('criptoName')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage)
    .bail()
    .custom((criptoName) => {
      if ((CRIPTO_NAMES as Array<String>).some((coin) => criptoName === coin)) {
        return Promise.resolve();
      }
      return Promise.reject('Essa moeda não é valida.');
    }),
  // body('title')
  //   .notEmpty()
  //   .withMessage(notEmptyMessage)
  //   .bail()
  //   .isString()
  //   .withMessage(isStringMessage),
  body('sinopse.text')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage),
  // body('studentsId.*')
  //   .isString()
  //   .withMessage('tem que ser uma string.')
  //   .bail()
  //   .isLength({ min: 4 })
  //   .withMessage('precisa ter 24 caracteres.'),

];
