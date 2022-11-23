import { Request, Response } from 'express';

/**
 * Function to handle async.
 *
 * @param func function
 * @returns promise
 */
export const asyncHandler =
  (func: any) => async (req: Request, res: Response, next: any) =>
    Promise.resolve(func(req, res, next)).catch(next);
