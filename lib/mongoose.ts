import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) {
        console.log('MONGODB_URL not found');
        return;
    }
    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
        });

        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error:any) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};
