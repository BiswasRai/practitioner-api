import { Router } from 'express';

import {
  create,
  remove,
  update,
  fetchAll,
  fetchById,
  updatePractitionerSpecialist
} from '../controllers/practitioner.controller';
import { validationPayload } from '../middleware/validation';
import {
  createPractitionerSchema,
  updatePractitionerSpecialistSchema
} from '../validation/practitionerValidation';

const practitionerRouter = Router();

practitionerRouter.get('/', fetchAll);
practitionerRouter.get('/:id', fetchById);
practitionerRouter.post(
  '/',
  validationPayload(createPractitionerSchema),
  create
);
practitionerRouter.put(
  '/:id',
  validationPayload(createPractitionerSchema),
  update
);
practitionerRouter.patch(
  ':id/sepecialist',
  validationPayload(updatePractitionerSpecialistSchema),
  updatePractitionerSpecialist
);
practitionerRouter.delete('/:id', remove);

export default practitionerRouter;
