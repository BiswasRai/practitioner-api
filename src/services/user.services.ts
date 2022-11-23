import { createUser, fetchUserById, updateUser } from '../dao/user.dao';

import User from '../models/user';

import { errorFormatter } from '../utils/errorUtils';
import { responseFormatter } from '../utils/responseUtils';

/**
 * Service to fetch by id.
 *
 * @param {number} id
 * Fix: any in return
 */
export const fetchById = async (id: number): Promise<any> => {
  let user;

  try {
    user = await fetchUserById(id);
  } catch (error) {
    return errorFormatter({
      status: 500,
      data: {
        error
      },
      message: { type: 'fetch', data: 'User' }
    });
  }

  if (user === null) {
    return errorFormatter({
      status: 404,
      data: {
        info: 'User not found'
      },
      message: { type: 'fetch', data: 'User' }
    });
  }

  return responseFormatter({
    status: 200,
    data: user,
    message: { type: 'fetch', data: 'User' }
  });
};

/**
 * Service to create user.
 *
 * @param {User} payload
 * @returns {Promise}
 */
export const handleCreateUser = async (payload: User): Promise<any> => {
  let user;

  try {
    user = await createUser(payload);
  } catch (error) {
    return errorFormatter({
      status: 500,
      data: {
        error
      },
      message: { type: 'create', data: 'User' }
    });
  }

  return responseFormatter({
    status: 201,
    data: user,
    message: { type: 'create', data: 'User' }
  });
};

/**
 * Service to update the user.
 *
 * @param {number} id
 * @param {User} payload
 * @returns {Promise}
 */
export const handleUpdateUser = async (
  id: number,
  payload: User
): Promise<{ status: number; data: object; message: string }> => {
  let user;
  try {
    await updateUser(id, payload);
    user = await fetchUserById(id);

    if (user === null) {
      return errorFormatter({
        status: 404,
        data: {
          info: 'User does not exist'
        },
        message: { type: 'fetch', data: 'User' }
      });
    }
  } catch (error) {
    return errorFormatter({
      status: 500,
      data: {
        error
      },
      message: { type: 'update', data: 'User' }
    });
  }

  return responseFormatter({
    status: 200,
    data: user,
    message: { type: 'update', data: 'User' }
  });
};
