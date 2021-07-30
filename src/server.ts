import express from 'express';
import { soma } from './controllers/soma';

const app = express();

const PORT = 3001;

app.get('/', (req, res) => res.json(soma(1, 2)));

app.listen(PORT, () => {
  console.log('Servidor ouvindo na porta ', PORT);
});
