import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from '../utils/jwtToken';

export interface CustomRequest extends Request {
  token: String | JwtPayload;
}

/**
 * Function to authenticate jwt token.
 *
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {Promise}
 */
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const bearerToken = req.header('Authorization')?.replace('Bearer', '');

  if (bearerToken === null) {
    return res.sendStatus(401).json({
      message: 'No token, authorization denied.'
    });
  }

  try {
    const decoded = verifyToken(bearerToken ?? '');

    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error,
      message: 'You are not authorized to access'
    });
  }
};
