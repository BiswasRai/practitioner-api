import Practitioner from '../models/practitioner';

/**
 * Function to fetch all practitioner.
 *
 * @returns {Promise<Practitioner[]>}
 */
export const fetchAllPractitioner = async (): Promise<Practitioner[]> => {
  return await Practitioner.findAll();
};

/**
 * Function to fetch practitioner by id.
 *
 * @param {number} id
 * @returns {Promise<Practitioner | null>}
 */
export const fetchPractitionerById = async (
  id: number
): Promise<Practitioner | null> => {
  return await Practitioner.findByPk(id);
};

/**
 * Function to create practitioner.
 *
 * @param {object} Practitioner
 * @returns {Promise<Practitioner>}
 */
export const createPractitioner = async (
  payload: Practitioner
): Promise<any> => {
  return await Practitioner.create(payload);
};

/**
 * Function to update practitioner.
 *
 * @param {number} id
 * @param {object} payload
 * @returns {Promise<object>}
 */
export const updatePractitioner = async (
  id: number,
  payload: Practitioner
): Promise<object> => {
  return await Practitioner.update(payload, {
    where: {
      id
    }
  });
};

/**
 * Function to delete practitioner.
 *
 * @param {number} id
 * @returns {Promise<object>}
 */
export const removePractitioner = async (id: number): Promise<Object> => {
  return await Practitioner.destroy({
    where: {
      id
    }
  });
};
