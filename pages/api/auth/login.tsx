import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/Users';
import bcrypt from 'bcrypt';
import { setTokenCookie } from '../../../utils/auth';


export default async function handler(req: any, res: any) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            //TODO Generate a session token and set it as a cookie
            const token = 'your_generated_token'; // Replace with your actual token
            setTokenCookie(res, token);

            return res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }


    return res.status(405).json({ message: 'Method Not Allowed' });
}
