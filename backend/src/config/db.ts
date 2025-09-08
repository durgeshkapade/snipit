import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jaybalaji192:BhojuUser@jaybalaji.s5azwy2.mongodb.net/snipit');
    console.log('MongoDB connected successfully');
  } catch (error:unknown) { 
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};
