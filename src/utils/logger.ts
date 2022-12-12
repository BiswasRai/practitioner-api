import fs from 'fs';

import winston, { format } from 'winston';
import 'winston-daily-rotate-file';

import { envConfig } from '../config/environment.config';

if (fs.existsSync(envConfig.LOG_DIR) === null) {
  fs.mkdirSync(envConfig.LOG_DIR);
}

/**
 * Create a new winston logger.
 */
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: envConfig.LOG_LEVEL
    }),
    new winston.transports.DailyRotateFile({
      format: format.combine(format.timestamp(), format.json()),
      maxFiles: '14d',
      level: envConfig.LOG_LEVEL,
      dirname: envConfig.LOG_DIR,
      datePattern: 'YYYY-MM-DD',
      filename: '%DATE%-debug.log'
    })
  ]
});

export const stream = {
  write: (message: any) => {
    logger.info(message.toString());
  }
};

export default logger;
