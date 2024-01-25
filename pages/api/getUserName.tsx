// pages/api/getUserName.js
import dbConnect from '../../utils/dbConnect';
import User from '../../models/Users';

export default async function handler(req: any, res: any) {
    await dbConnect();

    if (req.method === 'GET') {
        const { email } = req.query;

        try {
            const user = await User.findOne({ email });

            if (user) {
                res.status(200).json({ name: user.name });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

