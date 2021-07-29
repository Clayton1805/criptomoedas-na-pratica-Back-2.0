import express from 'express';

const app = express();

const PORT = 3001;

app.get('/', (req, res) => res.json('ola mondo'));

app.listen(PORT, () => {
  console.log('Servidor ouvindo na porta ', PORT);
});
