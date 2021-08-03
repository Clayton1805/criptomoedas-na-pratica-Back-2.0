import { model } from 'mongoose';
import { IArticle } from '../interfaces/article';
import articleSchema from '../schemas/article';

export default model<IArticle>('Article', articleSchema);
