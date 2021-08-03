import { Schema } from 'mongoose';

const articleSchema = new Schema({
  criptoName: { type: String, required: true },
  user: { type: String, required: true },
  title: { type: String, required: true },
  sinopse: {
    text: { type: String },
    urlImg: { type: String },
  },
  articleContent: [
    {
      contentType: { type: Schema.Types.ObjectId, required: true },
      content: {
        htmlJsonDraftJs: {
          blocks: [
            {
              text: { type: String },
            },
          ],
        },
      },
    },
  ],
  like: [{ type: Schema.Types.ObjectId }],
  dislike: [{ type: Schema.Types.ObjectId }],
}, { timestamps: true });

articleSchema.index({
  title: 'text',
  'sinopse.text': 'text',
  'articleContent.content.htmlJsonDraftJs.blocks.text': 'text',
});

export default articleSchema;
