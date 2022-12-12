import { object, string } from 'yup';
import { VALIDATION_MESSAGE } from '../constants/lang';

export const createUserSchema = object({
  firstName: string().required(VALIDATION_MESSAGE.REQUIRED('first name')),
  lastName: string().required(VALIDATION_MESSAGE.REQUIRED('last name')),
  email: string().email().required(VALIDATION_MESSAGE.REQUIRED('email')),
  password: string().required(VALIDATION_MESSAGE.REQUIRED('password'))
});

export const loginUserSchema = object({
  email: string().email().required(VALIDATION_MESSAGE.REQUIRED('email')),
  password: string().required(VALIDATION_MESSAGE.REQUIRED('password'))
});
