import { VALIDATION_MESSAGE } from '../constants/lang';

describe('ValidationMessage', () => {
  test('should return valid message', () => {
    // Arrange
    const input = 'image';
    const output = 'The image field is required.';

    // Act
    const requiredOutput = VALIDATION_MESSAGE.REQUIRED(input);

    // Assert
    expect(requiredOutput).toBe(output);
  });
});
