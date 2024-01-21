import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/Users';
import bcrypt from 'bcrypt';

export default async function handler(req:any, res:any) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email, password, name } = req.body;

        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'Username already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ email, password:hashedPassword, name });
            await user.save();

            return res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
