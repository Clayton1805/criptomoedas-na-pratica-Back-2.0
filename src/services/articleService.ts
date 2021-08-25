import { Request, Response } from 'express';
import { IArticle } from '../models/interfaces/article';
import { Article } from '../models/repositories/Article';
import { CREATED } from '../utils/allStatusCode';

export const articleService = {
  async create(req: Request, res: Response): Promise<Response> {
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
    return res.status(CREATED).json(article);
  },
};
