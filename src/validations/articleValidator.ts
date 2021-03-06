import { body } from 'express-validator';
import { CRIPTO_NAMES } from '../config';
import {
  isMatchesHtml, isStringMessage, notEmptyMessage, isNumberNaturalMessage,
} from '../utils/messagesValidators';

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
  body('title')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage),
  body('sinopse.text')
    .optional({ nullable: true })
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage),
  body('sinopse.urlImg')
    .optional({ nullable: true })
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage),
  body('content.html')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage)
    .bail()
    .matches(/<\/?[a-z][\s\S]*>/i)
    .withMessage(isMatchesHtml),
];

export const articleSearchValidators = [
  body('criptoName')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage)
    .bail()
    .custom((criptoName) => {
      if (([...CRIPTO_NAMES, 'all'] as Array<String>).some((coin) => criptoName === coin)) {
        return Promise.resolve();
      }
      return Promise.reject('Essa moeda não é valida.');
    }),
  body('text')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isString()
    .withMessage(isStringMessage),
  body('page')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isInt({ min: 1 })
    .withMessage(isNumberNaturalMessage),
];
