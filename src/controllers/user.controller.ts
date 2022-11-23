import { Request, Response } from 'express';

import {
  fetchById as fetchUserById,
  handleCreateUser,
  handleUpdateUser
} from '../services/user.services';

import { fetchAllUsers, removeUser } from '../dao/user.dao';

import { responseFormatter } from '../utils/responseUtils';

/**
 * Function to fetch all practitioner.
 *
 * @param {Request} _
 * @param {Response} res
 * @returns {Promise<Response>}
 */
const fetchAll = async (_: Request, res: Response): Promise<Response> => {
  const users = await fetchAllUsers();

  return res.status(200).json(
    responseFormatter({
      status: 200,
      data: users,
      message: { type: 'fetch', data: 'User' }
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
const fetchById = async (req: Request, res: Response): Promise<Response> => {
  const response = await fetchUserById(+req.params.id);

  return res.status(response.status).json(response);
};

/**
 * Function to add user.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
const create = async (req: Request, res: Response): Promise<Response> => {
  const response = await handleCreateUser(req.body);

  return res.status(response.status).json(response);
};

/**
 * Function to update User.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
const update = async (req: Request, res: Response): Promise<Response> => {
  const response = await handleUpdateUser(+req.params.id, req.body);

  return res.status(response.status).json(response);
};

/**
 * Function to remove User.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
const remove = (req: Request, res: Response): Response => {
  const removedUser = removeUser(+req.params.id);

  return res.status(200).json(
    responseFormatter({
      status: 200,
      data: removedUser,
      message: { type: 'delete', data: 'User' }
    })
  );
};

export { fetchAll, fetchById, create, remove, update };
