import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { MONGODB_URL } from './config';
import routes from './routes';
import log from './utils/log';

class App {
  public express: express.Application

  public constructor() {
    this.express = express();

    this.middlewares();
    App.database();
    this.routes();
    this.error();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(log);
  }

  private static database(): void {
    mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch((err) => {
        console.log(`MongoDB error: ${err}`);
      });
  }

  private routes(): void {
    this.express.use(routes);
  }

  private error(): void {
    // eslint-disable-next-line no-unused-vars
    const middlewareError: ErrorRequestHandler = (err, _req, res, _next) => {
      console.error({ err });
      res.status(500).json({ erro: 'erro interno' });
    };

    this.express.use(middlewareError);
  }
}

export default new App().express;
