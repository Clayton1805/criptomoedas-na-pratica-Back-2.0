import { model } from 'mongoose';
import { IArticle } from '../interfaces/article';
import SchemaUser from '../schemas/user';

export const User = model('User', SchemaUser);
