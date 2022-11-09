import { Router } from 'express';

import {
  fetchAll,
  removePractitioner,
  createPractitioner,
  updatePractitioner,
  fetchById
} from '../controllers/practitioner.controller';

const practitionerRouter = Router();

practitionerRouter.get('/', fetchAll);
practitionerRouter.get('/:id', fetchById);
practitionerRouter.post('/', createPractitioner);
practitionerRouter.put('/:id', updatePractitioner);
practitionerRouter.delete('/:id', removePractitioner);

export default practitionerRouter;
