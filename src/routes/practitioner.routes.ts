import { Router } from 'express';

import {
  create,
  remove,
  update,
  fetchAll,
  fetchById
} from '../controllers/practitioner.controller';

const practitionerRouter = Router();

practitionerRouter.get('/', fetchAll);
practitionerRouter.get('/:id', fetchById);
practitionerRouter.post('/', create);
practitionerRouter.put('/:id', update);
practitionerRouter.delete('/:id', remove);

export default practitionerRouter;
