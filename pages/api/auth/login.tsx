import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/Users';
import bcrypt from 'bcrypt';


export default async function handler(req: any, res: any) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            console.log("qswap", user,bcrypt.compare(password, user.password))
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Implement JWT token generation here if needed

            return res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }


    return res.status(405).json({ message: 'Method Not Allowed' });
}
