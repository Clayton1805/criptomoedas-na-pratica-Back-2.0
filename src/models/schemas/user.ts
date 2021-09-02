import { Schema } from 'mongoose';

const SchemaUser = Schema({
  email: { type: String, required: true, unique: true },
  cpf: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  namesOfResponsibles: [{ type: String }],
  contacts: [{ type: Number }],
  observation: [{
    teacherId: { type: String, required: true },
    date: { type: Date, default: Date.now },
    text: { type: String, required: true },
  }],
});

module.exports = mongoose.model('users', SchemaUser);
