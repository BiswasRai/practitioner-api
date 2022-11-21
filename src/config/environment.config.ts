import { config } from 'dotenv';

config();

export const envConfig = {
  PORT: process.env.PORT ?? '',
  CERT_PATH: process.env.CERT_PATH ?? '',
  DATABASE_NAME: process.env.DATABASE_NAME ?? '',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME ?? '',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ?? '',
  DATABASE_HOST: process.env.DATABASE_HOST ?? '',
  NODE_ENV: process.env.NODE_ENV ?? '',
  DATABASE_URL: process.env.DATABASE_URL ?? ''
};
