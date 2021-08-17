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
    htmlJsonDraftJs: {
      blocks: [
        {
          text: string,
        },
      ],
      entityMap: object,
    },
  },
  like?: string[],
  dislike?: string[],
}
