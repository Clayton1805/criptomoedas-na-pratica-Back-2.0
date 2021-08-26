import { Schema } from 'mongoose';
import { IArticle } from '../interfaces/article';

const articleSchema = new Schema<IArticle>({
  criptoName: { type: String, required: true },
  user: { type: String, required: true, default: '75736572616c6561746f696f' },
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
},
{
  default_language: 'pt',
  weights: {
    title: 4,
    'sinopse.text': 2,
  },
});

export default articleSchema;
