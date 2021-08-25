import { model } from 'mongoose';
import { IArticle } from '../interfaces/article';
import articleSchema from '../schemas/article';

export const Article = model<IArticle>('Article', articleSchema);
