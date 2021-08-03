import { Router } from 'express';

import { Article } from '../models/repositories';

const articleRouter = Router();

articleRouter.post('/', () => {});

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
