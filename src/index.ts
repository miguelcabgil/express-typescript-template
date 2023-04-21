import { Server } from './api/server';
import logger from './utils/logger.util';

const server = new Server();

(async () => {
  server.start();
})().catch((err) => logger.error(err));
