import { Request, Response } from 'express';

import {
  fetchById as fetchUserById,
  handleCreateUser,
  handleUpdateUser,
  handleUserLogin
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
export const fetchAll = async (
  _: Request,
  res: Response
): Promise<Response> => {
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
export const fetchById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await fetchUserById(+req.params.id);

  return res.status(response.status).json(response);
};

/**
 * Function to update User.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
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
export const remove = (req: Request, res: Response): Response => {
  const removedUser = removeUser(+req.params.id);

  return res.status(200).json(
    responseFormatter({
      status: 200,
      data: removedUser,
      message: { type: 'delete', data: 'User' }
    })
  );
};

/**
 * Function to login user.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const login = async (req: Request, res: Response): Promise<Response> => {
  const response = await handleUserLogin(req.body);

  return res.status(response.status).json(response);
};

/**
 * Function to signup user.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await handleCreateUser(req.body);

  return res.status(response.status).json(response);
};
