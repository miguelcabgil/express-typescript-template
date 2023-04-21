import { config } from 'dotenv';

config();

export const environment = {
  app: {
    port: process.env.PORT ?? 7777,
    uri: process.env.APP_URI ?? '',
    env: process.env.NODE_ENV ?? 'development',
  },
};

export function isProduction(): boolean {
  const prod = ['prod', 'production'];

  return prod.includes(environment.app.env.toLowerCase());
}

export function isDevelop(): boolean {
  const dev = ['dev', 'develop', 'development'];

  return dev.includes(environment.app.env.toLowerCase());
}
