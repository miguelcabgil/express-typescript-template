import morgan from 'morgan';
import logger from '../../utils/logger.util';

const stream = {
  write: (message: unknown) => logger.http(message),
};

const skip = () => false;
/**
 * Morgan custom tokens
 */

export const MorganMiddleware = morgan(
  ':method :status :url - :response-time ms',
  { stream, skip },
);
