import { Request, Response } from 'express';
import { IArticle } from '../models/interfaces/article';
import { Article } from '../models/repositories/Article';
import { CREATED, OK } from '../utils/allStatusCode';

export const articleService = {
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

  async delete(req: Request, res: Response): Promise<void> {
    const { idArticle } = req.params;

    await Article.deleteOne({ _id: idArticle });

    res.status(OK).send();
  },

  async catch(req: Request, res: Response): Promise<void> {
    const { idArticle } = req.params;

    const article = await Article.findById(idArticle);

    res.status(OK).json(article);
  },

  async search(req: Request, res: Response): Promise<void> {
    const { text, criptoName, page } = req.body;

    const objFind = { $text: { $search: text } };

    if (criptoName !== 'all') (objFind as any).criptoName = criptoName;

    const pageSize = 15;

    const articles = await Article
      .find(objFind, { content: 0 }, {
        skip: (pageSize * (page - 1)),
        limit: (pageSize * page),
      })
      .sort({ ignoredName: { $meta: 'textScore' } });

    res.status(OK).json(articles);
  },
};
