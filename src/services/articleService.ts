import { Request, Response } from 'express';
import { CREATED } from '../utils/allStatusCode';

export async function create(req: Request, res: Response): Promise<void> {
  const { body } = req;
  res.status(CREATED).json({ oi: true });
}
