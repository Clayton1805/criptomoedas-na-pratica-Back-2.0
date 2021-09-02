import { Document } from 'mongoose';

type rr = [ string, number ];

export interface IArticle extends Document {
  email: string,
  password: string,
  urlImag?: string,
  donationMethod: rr[],
}
