import mongoose from 'mongoose'
import configurations from './configurations.js';
import logger from './logger.js';

export const connectDB = async () => {
  try {
    
    await mongoose.connect(`mongodb+srv://${configurations.database.user}:${configurations.database.password}@jaybalaji.s5azwy2.mongodb.net/${configurations.database.name}`);
    logger.info("Database Connnected Successfully")
} catch (error:unknown) { 
    logger.error("Error Connecting Database")
    process.exit(1); // Exit process with failure
  }
};
