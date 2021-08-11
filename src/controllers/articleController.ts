import { Router } from 'express';

import { Article } from '../models/repositories';
import { articleService } from '../services/articleService';
import { articlePostValidator } from '../validations/articleValidator';
import { validate } from '../validations/validate';

const articleRouter = Router();

articleRouter.post('/', validate(articlePostValidator), articleService.create);

articleRouter.get('/', async (_req, res) => {
  try {
    const newPostReturn = await Article
      .find({ $text: { $search: 'ola' } });

    res.json(newPostReturn);
  } catch (err) {
    console.log(`erro Article ${err}`);
  }
});

export default articleRouter;
