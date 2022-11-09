import { Router } from 'express';

import practitionerRouter from './practitioner.routes';

const router = Router();

router.use('/practitioner', practitionerRouter);

export default router;
