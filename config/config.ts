import { envConfig } from '../src/config/environment.config';
import fs from 'fs';

module.exports = {
  development: {
    username: envConfig.DATABASE_USERNAME,
    password: envConfig.DATABASE_PASSWORD,
    database: envConfig.DATABASE_NAME,
    host: envConfig.DATABASE_HOST,
    url: envConfig.DATABASE_URL,
    cert_path: envConfig.CERT_PATH,
    database_host: envConfig.DATABASE_HOST,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        ca: fs.readFileSync(envConfig.CERT_PATH + '/ca-certificates.crt')
      }
    }
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
