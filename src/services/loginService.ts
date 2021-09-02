import { Request, Response } from 'express';
import { IArticle } from '../models/interfaces/article';
import { Article } from '../models/repositories/Article';
import { CREATED } from '../utils/allStatusCode';

export const loginService = {
  async create(req: Request, res: Response): Promise<void> {
    const articleBody: IArticle = req.body;

    const articleObj = {
      criptoName: articleBody.criptoName,
      title: articleBody.title,
      content: {
        html: articleBody.content.html,
      },
      sinopse: {
        text: (articleBody.sinopse || {}).text,
        urlImg: (articleBody.sinopse || {}).urlImg,
      },
    };

    const article = await Article.create(articleObj);

    res.status(CREATED).json(article);
  },
};
