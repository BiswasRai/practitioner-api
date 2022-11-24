import { Router } from 'express';

import { login, signUp } from '../controllers/user.controller';

const loginSignupRouter = Router();

loginSignupRouter.post('/login', login);
loginSignupRouter.post('/signup', signUp);
export default loginSignupRouter;
