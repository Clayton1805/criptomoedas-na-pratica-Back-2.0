import { body } from 'express-validator';
import { CRIPTO_NAMES } from '../config';

export const articlePostValidator = [
  body('criptoName')
    .notEmpty()
    .withMessage('precisa ser preenchido.')
    .bail()
    .isString()
    .withMessage('tem que ser uma string.')
    .bail()
    .custom((criptoName) => {
      if ((CRIPTO_NAMES as Array<String>).some((coin) => criptoName === coin)) {
        return Promise.resolve();
      }
      return Promise.reject('essa moeda não é valida.');
    }),
  // body('teacherId')
  //   .if(body('teacherId').notEmpty()),
  // body('studentsId')
  //   .notEmpty()
  //   .withMessage('precisa ser preenchido.'),
  // body('studentsId.*')
  //   .isString()
  //   .withMessage('tem que ser uma string.')
  //   .bail()
  //   .isLength({ min: 4 })
  //   .withMessage('precisa ter 24 caracteres.'),

];
