import bodyParser from 'body-parser';
import express from 'express';
import router from './routes/index.routes';
import { initialize } from './config/database.config';
import { envConfig } from './config/environment.config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

initialize();

app.listen(envConfig.PORT, () => {
  console.log('working');
});

export default app;
