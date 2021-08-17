import { body } from 'express-validator';
import { CRIPTO_NAMES } from '../config';
import { isObjectMessage, isStringMessage, notEmptyMessage } from '../utils/messagesValidators';

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
    .isString()
    .withMessage(isStringMessage),
  body('sinopse.urlImg')
    .optional({ nullable: true })
    .isString()
    .withMessage(isStringMessage),
  body('content.htmlJsonDraftJs.entityMap')
    .notEmpty()
    .withMessage(notEmptyMessage)
    .bail()
    .isObject()
    .withMessage(isObjectMessage),
  body('content.htmlJsonDraftJs.blocks')
    .notEmpty()
    .withMessage(notEmptyMessage),
  body('content.htmlJsonDraftJs.blocks.*.text')
    .isString()
    .withMessage(isStringMessage),
];
