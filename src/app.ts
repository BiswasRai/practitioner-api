import express from 'express';
import router from './routes/index.routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.listen('3001', (): void => {});

export default app;
