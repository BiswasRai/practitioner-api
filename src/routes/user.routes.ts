import { Router } from 'express';

import {
  create,
  remove,
  update,
  fetchAll,
  fetchById
} from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', fetchAll);
userRouter.get('/:id', fetchById);
userRouter.post('/', create);
userRouter.put('/:id', update);
userRouter.delete('/:id', remove);

export default userRouter;
