import { Schema } from 'mongoose';

const articleSchema = new Schema({
  criptoName: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  sinopse: {
    text: { type: String },
    urlImg: { type: String },
  },
  content: {
    htmlJsonDraftJs: {
      blocks: [
        {
          text: { type: String, required: true },
        },
      ],
    },
  },
  like: [{ type: Schema.Types.ObjectId }],
  dislike: [{ type: Schema.Types.ObjectId }],
}, { timestamps: true });

articleSchema.index({
  title: 'text',
  'sinopse.text': 'text',
  'content.htmlJsonDraftJs.blocks.text': 'text',
});

export default articleSchema;
