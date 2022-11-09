import { Request, Response } from 'express';
import { responseFormatter } from '../utils/responseUtils';

/**
 * Function to fetch all practitioner.
 *
 * @param req Request object
 * @param res Response object
 * @returns JsonResponse object
 */
const fetchAll = (req: Request, res: Response): Response => {
  return res.status(200).json(
    responseFormatter({
      status: 200,
      data: req.body,
      message: { type: 'fetch', data: 'Practitioner' }
    })
  );
};

/**
 * Function to fetch a practitioner.
 *
 * @param req Request object
 * @param res Response object
 * @returns JsonResponse object
 */
const fetchById = (req: Request, res: Response): Response => {
  const response = responseFormatter({
    status: 201,
    data: req.body,
    message: { type: 'fetch', data: 'Practitioner' }
  });

  return res.status(200).json(response);
};

/**
 * Function to add practitioner.
 *
 * @param req Request object
 * @param res Response object
 * @returns JsonResponse object
 */
const createPractitioner = (req: Request, res: Response): Response => {
  return res.status(201).json(
    responseFormatter({
      status: 201,
      data: req.body,
      message: { type: 'create', data: 'Practitioner' }
    })
  );
};

/**
 * Function to update practitioner.
 *
 * @param req Request object
 * @param res Response object
 * @returns JsonResponse object
 */
const updatePractitioner = (req: Request, res: Response): Response => {
  return res.status(201).json(
    responseFormatter({
      status: 200,
      data: req.body,
      message: { type: 'update', data: 'Practitioner' }
    })
  );
};

/**
 * Function to remove practitioner.
 *
 * @param req Request object
 * @param res Response object
 * @returns JsonResponse object
 */
const removePractitioner = (req: Request, res: Response): Response => {
  return res.status(200).json(
    responseFormatter({
      status: 200,
      data: req.body,
      message: { type: 'delete', data: 'Practitioner' }
    })
  );
};

export {
  fetchAll,
  fetchById,
  createPractitioner,
  removePractitioner,
  updatePractitioner
};
