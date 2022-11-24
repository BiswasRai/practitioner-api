import { SUCCESS_MESSAGE } from '../constants/lang';

export interface ApiResponse {
  status: number;
  data: object;
  message: { type: string; data: string };
}

/**
 * Function to format the response.
 *
 * @param apiData ApiResponse
 */
export const responseFormatter = (
  apiData: ApiResponse
): { status: number; data: object; message: string } => {
  const { status, data, message } = apiData;

  return {
    status,
    data,
    message: handleSuccessMessage({ type: message.type, data: message.data })
  };
};

/**
 * Function to handle success message according to message.
 *
 * @param message object
 * @returns string
 */
const handleSuccessMessage = (message: {
  type: string;
  data: string;
}): string => {
  switch (message.type) {
    case 'fetch':
      return SUCCESS_MESSAGE.FETCHED(message.data);

    case 'create':
      return SUCCESS_MESSAGE.CREATED(message.data);

    case 'update':
      return SUCCESS_MESSAGE.UPDATED(message.data);

    case 'delete':
      return SUCCESS_MESSAGE.DELETED(message.data);

    case 'login':
      return SUCCESS_MESSAGE.LOGIN(message.data);

    default:
      return '';
  }
};
