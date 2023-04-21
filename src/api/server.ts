import express, { Express } from 'express';

import { environment } from '../environment';
import { Middlewares } from './middlewares';
import logger from '../utils/logger.util';
import { attachControllers } from '@decorators/express';
import { TestController } from './controllers/test.controller';

export class Server {
  private readonly app: Express;

  constructor() {
    this.app = express();
    Middlewares(this.app);
    attachControllers(this.app, [TestController]).then();
  }

  public start(): void {
    this.app.listen(environment.app.port, () => {
      logger.info(`Listening on port: ${environment.app.port}`);
    });
  }
}
