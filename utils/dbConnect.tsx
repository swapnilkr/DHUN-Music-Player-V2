import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
    try {
        //TODO
        await mongoose.connect(process.env.MONGO_URL || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
      
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
