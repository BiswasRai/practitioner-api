export const ERROR_MESSAGE = {
  LOGIN: (fieldName: string) => `Error while logging in ${fieldName}.`,
  FETCHED: (fieldName: string) => `Error while fetching the ${fieldName}.`,
  CREATED: (fieldName: string) => `Error while creating the ${fieldName}.`,
  UPDATED: (fieldName: string) => `Error while updating the ${fieldName}.`,
  DELETED: (fieldName: string) => `Error while deleting the ${fieldName}.`
};

export const SUCCESS_MESSAGE = {
  LOGIN: (fieldName: string) => `Successfully logged in ${fieldName}.`,
  CREATED: (fieldName: string) => `Successfully created the ${fieldName}.`,
  UPDATED: (fieldName: string) => `Successfully updated the ${fieldName}.`,
  FETCHED: (fieldName: string) => `Successfully fetched the ${fieldName}.`,
  DELETED: (fieldName: string) => `Successfully deleted the ${fieldName}.`
};

export const VALIDATION_MESSAGE = {
  REQUIRED: (fieldName: string) => `The ${fieldName} field is required.`
};
