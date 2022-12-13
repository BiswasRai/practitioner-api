import bodyParser from 'body-parser';
import express from 'express';
import router from './routes/index.routes';
import { initialize } from './config/database.config';
import { envConfig } from './config/environment.config';
import logger from './utils/logger';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(fileUpload({ useTempFiles: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

initialize();

app.listen(envConfig.PORT, () => {
  console.log('working');
  logger.info('Server started at  ');
});

export default app;
