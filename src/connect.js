/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import * as constants from './settings';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(constants.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Connected');
  } catch (err) {
    console.error(`Error ${err.message}`);
  }
})();
