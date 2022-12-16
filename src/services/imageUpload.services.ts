/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Response } from 'express';
import cloudinary from '../config/cloudinary.config';
import { errorFormatter } from '../utils/errorUtils';
import { responseFormatter } from '../utils/responseUtils';

/**
 *
 * @param req
 */
export const imageUpload = async (
  req: any,
  res: Response
): Promise<Response> => {
  let imageURL: any;

  try {
    imageURL = await cloudinary.uploader.upload(req.files.file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: 'auto'
    });

    return res.status(201).json(
      responseFormatter({
        status: 201,
        data: {
          imageURL: imageURL.url
        },
        message: { type: 'create', data: 'Image' }
      })
    );
  } catch (error) {
    return res.status(500).json(
      errorFormatter({
        status: 500,
        data: {
          error
        },
        message: { type: 'create', data: 'Image' }
      })
    );
  }
};
