import cors from 'cors';
import { Express } from 'express';

export const CorsMiddleware = (app: Express) => {
  app.use(
    cors({
      origin: true,
      methods: ['DELETE', 'GET', 'OPTIONS', 'PATCH', 'POST', 'PUT'],
      allowedHeaders: [
        'Access-Token',
        'Authorization',
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Access-Control-Allow-Request-Method',
      ],
    }),
  );
};
