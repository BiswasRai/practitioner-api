import { ERROR_MESSAGE } from '../constants/lang';

export interface errorApiResponse {
  status: number;
  data: object;
  message: { type: string; data: string };
}

/**
 * Function to format the response.
 *
 * @param apiData ApiResponse
 */
export const errorFormatter = (
  apiData: errorApiResponse
): { status: number; data: object; message: string } => {
  const { status, data, message } = apiData;

  return {
    status,
    data,
    message: handleErrorMessage({ type: message.type, data: message.data })
  };
};

/**
 * Function to handle error message according to message.
 *
 * @param message object
 * @returns string
 */
const handleErrorMessage = (message: {
  type: string;
  data: string;
}): string => {
  switch (message.type) {
    case 'fetch':
      return ERROR_MESSAGE.FETCHED(message.data);

    case 'create':
      return ERROR_MESSAGE.CREATED(message.data);

    case 'update':
      return ERROR_MESSAGE.UPDATED(message.data);

    case 'delete':
      return ERROR_MESSAGE.DELETED(message.data);

    case 'login':
      return ERROR_MESSAGE.LOGIN(message.data);

    default:
      return '';
  }
};
