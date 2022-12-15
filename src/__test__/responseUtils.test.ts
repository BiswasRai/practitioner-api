import {
  responseFormatter,
  handleSuccessMessage
} from '../utils/responseUtils';

describe('responseFormatter', () => {
  test('should return valid response format', () => {
    // Arrange
    const input = {
      status: 500,
      data: {
        info: ''
      },
      message: { type: 'fetch', data: 'practitioner' }
    };

    const output = {
      status: 500,
      data: {
        info: ''
      },
      message: 'Successfully fetched the practitioner.'
    };

    // Act
    const error = responseFormatter(input);

    // Assert
    expect(error).toStrictEqual(output);
  });
});

describe('handleSuccessMessage', () => {
  test('should return valid success message', () => {
    const fetch = 'Successfully fetched the practitioner.';
    const create = 'Successfully created the practitioner.';
    const update = 'Successfully updated the practitioner.';
    const deleteRes = 'Successfully deleted the practitioner.';
    const login = 'Successfully logged in practitioner.';

    // Act
    const successFetch = handleSuccessMessage({
      type: 'fetch',
      data: 'practitioner'
    });

    const successCreate = handleSuccessMessage({
      type: 'create',
      data: 'practitioner'
    });

    const successUpdate = handleSuccessMessage({
      type: 'update',
      data: 'practitioner'
    });

    const successDeleteRes = handleSuccessMessage({
      type: 'delete',
      data: 'practitioner'
    });

    const successLogin = handleSuccessMessage({
      type: 'login',
      data: 'practitioner'
    });

    // Assert
    expect(successFetch).toBe(fetch);
    expect(successCreate).toBe(create);
    expect(successDeleteRes).toBe(deleteRes);
    expect(successUpdate).toBe(update);
    expect(successLogin).toBe(login);
  });

  test('should return empty message when there is no valid type', () => {
    // Arrange
    const input = {
      type: '',
      data: 'Success while fetching the image.'
    };

    const output = '';

    // Act
    const successMessage = handleSuccessMessage(input);

    // Assert
    expect(successMessage).toBe(output);
  });
});
