import { Express } from 'express';
import helmet from 'helmet';

import { CorsMiddleware } from './cors.middleware';
import { BodyParserMiddleware } from './body-parser.middleware';
import { MorganMiddleware } from './morgan.middleware';

export const Middlewares = (app: Express) => {
  CorsMiddleware(app);
  app.use(helmet());
  BodyParserMiddleware(app);
  app.use(MorganMiddleware);
};
