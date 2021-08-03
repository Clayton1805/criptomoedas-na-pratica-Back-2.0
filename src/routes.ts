import { Router } from 'express';
import { articleController } from './controllers';

const routes = Router();

routes.use('/article', articleController);

export default routes;
