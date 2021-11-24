import dotenv from 'dotenv';

dotenv.config();

export const connectionString = process.env.CONNECTION_STRING.trim();
export const jwtPrivateKey = process.env.JWT_PRIVATE_KEY.trim();
export const saltWorkFactor = process.env.SALT_WORK_FACTOR.trim();
