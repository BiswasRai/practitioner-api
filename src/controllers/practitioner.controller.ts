import { Request, Response } from 'express';
import {
  fetchAllPractitioner,
  removePractitioner
} from '../dao/practitioner.dao';

import {
  fetchById as fetchPractitionerById,
  handleCreatePractitioner,
  handleUpdatePractitioner
} from '../services/practitioner.services';

import { responseFormatter } from '../utils/responseUtils';

/**
 * Function to fetch all practitioner.
 *
 * @param {Request} _
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const fetchAll = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const users = await fetchAllPractitioner();

  return res.status(200).json(
    responseFormatter({
      status: 200,
      data: users,
      message: { type: 'fetch', data: 'Practitioner' }
    })
  );
};

/**
 * Function to fetch a practitioner.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const fetchById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await fetchPractitionerById(+req.params.id);

  return res.status(response.status).json(response);
};

/**
 * Function to add user.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await handleCreatePractitioner(req.body);

  return res.status(response.status).json(response);
};

/**
 * Function to update practitioner.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await handleUpdatePractitioner(+req.params.id, req.body);

  return res.status(response.status).json(response);
};

/**
 * Function to remove practitioner.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await removePractitioner(+req.params.id);

  return res.status(200).json(
    responseFormatter({
      status: 200,
      data: {
        info: {
          id: req.params.id
        }
      },
      message: { type: 'delete', data: 'Practitioner' }
    })
  );
};

/**
 * Function to update practitioner specialist.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const updatePractitionerSpecialist = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await handleUpdatePractitioner(+req.params.id, req.body);

  return res.status(response.status).json(response);
};
