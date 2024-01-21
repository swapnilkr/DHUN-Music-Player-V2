import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
    try {
        //TODO
        await mongoose.connect('mongodb://127.0.0.1:27017/trash', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
