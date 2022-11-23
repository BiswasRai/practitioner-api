import { Router } from 'express';

import practitionerRouter from './practitioner.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/practitioner', practitionerRouter);

export default router;
