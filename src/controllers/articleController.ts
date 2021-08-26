import { Router } from 'express';
import rescue from 'express-rescue';

import { articleService } from '../services/articleService';
import { articlePostValidators, articleSearchValidators } from '../validations/articleValidator';
// import { tokenValidator } from '../validations/authorizationValidator';
import { validate } from '../validations/validate';

const articleRouter = Router();

articleRouter.post('/',
  // validateAuthorization(tokenValidator),
  validate(articlePostValidators),
  rescue(articleService.create));

articleRouter.delete('/:idArticle',
  // validateAuthorization(tokenValidator),
  rescue(articleService.delete));

articleRouter.get('/search',
  validate(articleSearchValidators),
  rescue(articleService.search));

articleRouter.get('/:idArticle',
  rescue(articleService.catch));

// try {
//   const newPostReturn = await Article
//     .find({ $text: { $search: 'ola' } });

//   res.json(newPostReturn);
// } catch (err) {
//   console.log(`erro Article ${err}`);
// }
export default articleRouter;
