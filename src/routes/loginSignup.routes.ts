import { Router } from 'express';

import { login, signUp } from '../controllers/user.controller';
import { validationPayload } from '../middleware/validation';
import {
  createUserSchema,
  loginUserSchema
} from '../validation/userValidation';

const loginSignupRouter = Router();

loginSignupRouter.post('/login', validationPayload(loginUserSchema), login);
loginSignupRouter.post('/signup', validationPayload(createUserSchema), signUp);
export default loginSignupRouter;
