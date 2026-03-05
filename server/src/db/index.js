import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );

    console.log(
      `MondoDB connected !!! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.log('MONGODB Connection Failed', e);
    process.exit(1);
  }
};

export default connectDB;
