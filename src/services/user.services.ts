import {
  createUser,
  fetchUserById,
  findByEmail,
  updateUser
} from '../dao/user.dao';

import User from '../models/user';

import { errorFormatter } from '../utils/errorUtils';
import { responseFormatter } from '../utils/responseUtils';
import { signToken } from '../utils/jwtToken';

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

  const isEmailExists = await findByEmail(payload.email);

  if (isEmailExists != null) {
    return errorFormatter({
      status: 500,
      data: {
        info: 'Email already exists'
      },
      message: { type: 'create', data: 'User' }
    });
  }

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

  const accessToken = signToken(user.email, '60');
  const refreshToken = signToken(user.email, '1d');

  return responseFormatter({
    status: 201,
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      accessToken,
      refreshToken
    },
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

/**
 * Function to handle user login.
 *
 * @param {object} payload
 * @return {Promise}
 */
export const handleUserLogin = async (payload: {
  email: 'string';
  password: 'string';
}): Promise<Response | any> => {
  let user;

  try {
    user = await User.findOne({
      where: {
        email: payload.email,
        password: payload.password
      }
    });
  } catch (error) {
    return errorFormatter({
      status: 401,
      data: {
        error
      },
      message: { type: 'login', data: 'User' }
    });
  }

  if (user === null) {
    return errorFormatter({
      status: 404,
      data: {
        info: 'Email or password you have entered is incorrect'
      },
      message: { type: 'login', data: 'User' }
    });
  }

  const accessToken = signToken(user.email, '60');
  const refreshToken = signToken(user.email, '1d');

  return responseFormatter({
    status: 200,
    data: {
      email: user.email,
      accessToken,
      refreshToken
    },
    message: { type: 'login', data: 'User' }
  });
};
