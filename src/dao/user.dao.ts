import User from '../models/user';

/**
 * Function to fetch all users.
 *
 * @returns {Promise<User[]>}
 */
export const fetchAllUsers = async (): Promise<User[]> => {
  return await User.findAll();
};

/**
 * Function to fetch user by id.
 *
 * @param {number} id
 * @returns {Promise<User | null>}
 */
export const fetchUserById = async (id: number): Promise<User | null> => {
  return await User.findByPk(id);
};

/**
 * Function to create user.
 *
 * @param {object} User
 * @returns {Promise<User>}
 */
export const createUser = async (payload: User): Promise<any> => {
  return await User.create(payload);
};

/**
 * Function to update user.
 *
 * @param {number} id
 * @param {object} payload
 * @returns {Promise<object>}
 */
export const updateUser = async (
  id: number,
  payload: User
): Promise<object> => {
  return await User.update(payload, {
    where: {
      id
    }
  });
};

/**
 * Function to delete user.
 *
 * @param {number} id
 * @returns {Promise<object>}
 */
export const removeUser = async (id: number): Promise<Object> => {
  return await User.destroy({
    where: {
      id
    }
  });
};

/**
 * Function to find if email already exists.
 *
 * @param {value} value
 * @returns {Promise<User | null>}
 */
export const findByEmail = async (value: any): Promise<User | null> => {
  return await User.findOne({
    where: {
      email: value
    }
  });
};
