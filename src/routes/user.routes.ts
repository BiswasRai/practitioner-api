import { Router } from 'express';

import {
  remove,
  update,
  fetchAll,
  fetchById
} from '../controllers/user.controller';
import { validationPayload } from '../middleware/validation';
import { createUserSchema } from '../validation/userValidation';

const userRouter = Router();

userRouter.get('/', fetchAll);
userRouter.get('/:id', fetchById);
userRouter.put('/:id', validationPayload(createUserSchema), update);
userRouter.delete('/:id', remove);

export default userRouter;
