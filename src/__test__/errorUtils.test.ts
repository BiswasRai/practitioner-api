import { errorFormatter, handleErrorMessage } from '../utils/errorUtils';

describe('errorFormatter', () => {
  test('should return valid error format', () => {
    // Arrange
    const input = {
      status: 500,
      data: {
        info: 'something went wrong'
      },
      message: { type: 'fetch', data: 'practitioner' }
    };

    const output = {
      status: 500,
      data: {
        info: 'something went wrong'
      },
      message: 'Error while fetching the practitioner.'
    };

    // Act
    const error = errorFormatter(input);

    // Assert
    expect(error).toStrictEqual(output);
  });
});

describe('handleErrorMessage', () => {
  test('should return valid error message', () => {
    const fetch = 'Error while fetching the practitioner.';
    const create = 'Error while creating the practitioner.';
    const update = 'Error while updating the practitioner.';
    const deleteRes = 'Error while deleting the practitioner.';
    const login = 'Error while logging in practitioner.';

    // Act
    const errorFetch = handleErrorMessage({
      type: 'fetch',
      data: 'practitioner'
    });

    const errorCreate = handleErrorMessage({
      type: 'create',
      data: 'practitioner'
    });

    const errorUpdate = handleErrorMessage({
      type: 'update',
      data: 'practitioner'
    });

    const errorDeleteRes = handleErrorMessage({
      type: 'delete',
      data: 'practitioner'
    });

    const errorLogin = handleErrorMessage({
      type: 'login',
      data: 'practitioner'
    });

    // Assert
    expect(errorFetch).toBe(fetch);
    expect(errorCreate).toBe(create);
    expect(errorDeleteRes).toBe(deleteRes);
    expect(errorUpdate).toBe(update);
    expect(errorLogin).toBe(login);
  });

  test('should return empty message when there is no valid type', () => {
    // Arrange
    const input = {
      type: '',
      data: 'Error while fetching the image.'
    };

    const output = '';

    // Act
    const errorMessage = handleErrorMessage(input);

    // Assert
    expect(errorMessage).toBe(output);
  });
});
