import {
  createPractitioner,
  fetchPractitionerById,
  updatePractitioner
} from '../dao/practitioner.dao';

import Practitioner from '../models/practitioner';

import { errorFormatter } from '../utils/errorUtils';
import { responseFormatter } from '../utils/responseUtils';

/**
 * Service to fetch by id.
 *
 * @param {number} id
 * Fix: any in return
 */
export const fetchById = async (id: number): Promise<any> => {
  let practitioner;

  try {
    practitioner = await fetchPractitionerById(id);
  } catch (error) {
    return errorFormatter({
      status: 500,
      data: {
        error
      },
      message: { type: 'fetch', data: 'Practitioner' }
    });
  }

  if (practitioner === null) {
    return errorFormatter({
      status: 404,
      data: {
        info: 'Practitioner not found'
      },
      message: { type: 'fetch', data: 'Practitioner' }
    });
  }

  return responseFormatter({
    status: 200,
    data: practitioner,
    message: { type: 'fetch', data: 'Practitioner' }
  });
};

/**
 * Service to create practitioner.
 *
 * @param {Practitioner} payload
 * @returns {Promise}
 */
export const handleCreatePractitioner = async (
  payload: Practitioner
): Promise<any> => {
  let practitioner;

  try {
    practitioner = await createPractitioner(payload);
  } catch (error) {
    return errorFormatter({
      status: 500,
      data: {
        error
      },
      message: { type: 'create', data: 'Practitioner' }
    });
  }

  return responseFormatter({
    status: 201,
    data: practitioner,
    message: { type: 'create', data: 'Practitioner' }
  });
};

/**
 * Service to update the practitioner.
 *
 * @param {number} id
 * @param {Practitioner} payload
 * @returns {Promise}
 */
export const handleUpdatePractitioner = async (
  id: number,
  payload: Practitioner
): Promise<{ status: number; data: object; message: string }> => {
  let practitioner;
  try {
    await updatePractitioner(id, payload);
    practitioner = await fetchPractitionerById(id);

    if (practitioner === null) {
      return errorFormatter({
        status: 404,
        data: {
          info: 'Practitioner does not exist'
        },
        message: { type: 'fetch', data: 'Practitioner' }
      });
    }
  } catch (error) {
    return errorFormatter({
      status: 500,
      data: {
        error
      },
      message: { type: 'update', data: 'Practitioner' }
    });
  }

  return responseFormatter({
    status: 200,
    data: practitioner,
    message: { type: 'update', data: 'Practitioner' }
  });
};
