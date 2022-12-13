import { Router } from 'express';
import { imageUpload } from '../services/imageUpload.services';

const imageRouter = Router();

imageRouter.post('/', imageUpload);

export default imageRouter;
