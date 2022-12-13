import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';
import imageRouter from './image.routes';
import loginSignupRouter from './loginSignup.routes';

import practitionerRouter from './practitioner.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/', loginSignupRouter);
router.use('/users', authenticate, userRouter);
router.use('/image', imageRouter);
router.use('/practitioner', authenticate, practitionerRouter);

export default router;
