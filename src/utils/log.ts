import { NextFunction, Request, Response } from 'express';

export default (req: Request, _res: Response, next: NextFunction) => {
  console.log({
    data: new Date(),
    method: req.method,
    router: req.originalUrl,
  });
  next();
};
