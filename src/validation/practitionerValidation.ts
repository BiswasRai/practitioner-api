import { boolean, date, number, object, string } from 'yup';
import { VALIDATION_MESSAGE } from '../constants/lang';

export const createPractitionerSchema = object({
  fullName: string().required(VALIDATION_MESSAGE.REQUIRED('full name')),
  email: string().email().required(VALIDATION_MESSAGE.REQUIRED('email')),
  contact: number().required(VALIDATION_MESSAGE.REQUIRED('contact')),
  dateOfBirth: date().required(VALIDATION_MESSAGE.REQUIRED('date of birth')),
  workingDays: number().required(VALIDATION_MESSAGE.REQUIRED('working days')),
  startTime: string().required(VALIDATION_MESSAGE.REQUIRED('start time')),
  endTime: string().required(VALIDATION_MESSAGE.REQUIRED('end time')),
  permanentAddress: string().required(
    VALIDATION_MESSAGE.REQUIRED('permanent address')
  ),
  temporaryAddress: string().required(
    VALIDATION_MESSAGE.REQUIRED('temporary address')
  ),
  photo: string().required(VALIDATION_MESSAGE.REQUIRED('photo'))
});

export const updatePractitionerSpecialistSchema = object({
  isSpecialist: boolean().required(VALIDATION_MESSAGE.REQUIRED('is specialist'))
});
