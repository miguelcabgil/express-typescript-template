import express, { Express } from 'express';

export const BodyParserMiddleware = (app: Express) => {
  app.use(
    express.json({
      type: '*/*',
    }),
  );
  app.use(express.urlencoded({ extended: true }));
};
