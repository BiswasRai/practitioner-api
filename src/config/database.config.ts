/* eslint-disable no-console */
import * as fs from 'fs';

import { Sequelize } from 'sequelize';

import { envConfig } from './environment.config';

/**
 * Function to initialize the connection.
 */
export const initialize = (): void => {
  sequelize
    .authenticate()
    .then(() => console.log('Database working'))
    .catch(err => console.log('error', err));
};

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  CERT_PATH,
  DATABASE_NAME
} = envConfig;

export const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        ca: fs.readFileSync(CERT_PATH + '/ca-certificates.crt')
      }
    }
  }
);
