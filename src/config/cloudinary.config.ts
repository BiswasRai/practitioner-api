import { v2 as cloudinary } from 'cloudinary';
import { envConfig } from './environment.config';

cloudinary.config({
  api_key: envConfig.CLOUDINARY_API_KEY,
  api_secret: envConfig.CLOUDINARY_API_SECRET,
  cloud_name: envConfig.CLOUDINARY_CLOUD_NAME
});

export default cloudinary;
