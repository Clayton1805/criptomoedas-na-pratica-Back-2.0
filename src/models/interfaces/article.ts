import { Document } from 'mongoose';

export interface IArticle extends Document {
  criptoName: string,
  user: string,
  title: string,
  sinopse?: {
    text?: string,
    urlImg?: string,
  },
  content: {
    html: string,
    createdAt: Date,
    updatedAt: Date,
  },
  like?: string[],
  dislike?: string[],
}
