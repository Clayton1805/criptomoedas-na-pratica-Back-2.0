import { Request, Response } from 'express';
import { IArticle } from '../models/interfaces/article';
import { CREATED } from '../utils/allStatusCode';

export const articleService = {
  async create(req: Request, res: Response): Promise<Response> {
    const bla: IArticle = req.body;
    return res.status(CREATED).json({ oi: bla });
  },
};
