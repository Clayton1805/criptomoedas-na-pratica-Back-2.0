import { Schema } from 'mongoose';
import { IArticle } from '../interfaces/article';

const articleSchema = new Schema<IArticle>({
  criptoName: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true, default: 'useraleatoio' },
  title: { type: String, required: true },
  sinopse: {
    text: String,
    urlImg: String,
  },
  content: {
    html: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  like: [{ type: Schema.Types.ObjectId }],
  dislike: [{ type: Schema.Types.ObjectId }],
});

articleSchema.index({
  title: 'text',
  'sinopse.text': 'text',
});

export default articleSchema;
