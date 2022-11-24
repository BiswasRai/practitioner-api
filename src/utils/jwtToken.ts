import jwt, { JwtPayload } from 'jsonwebtoken';
import { envConfig } from '../config/environment.config';

/**
 * Function to verify the token.
 *
 * @param {string} token
 * @returns {JwtPayload | String}
 */
export const verifyToken = (token: string): JwtPayload | String => {
  return jwt.verify(token, envConfig.JWT_SECRET_KEY);
};

/**
 * Function to sign in the token.
 *
 * @param {string} token
 * @param {string} expiresIn
 * @returns {JwtPayload | String}
 */
export const signToken = (
  token: string,
  expiresIn: string
): JwtPayload | String => {
  return jwt.sign({ token }, envConfig.JWT_SECRET_KEY, {
    expiresIn
  });
};
