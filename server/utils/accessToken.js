import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const genarateAccessToken = async (userId) => {

    const token = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
    })
    return token

}

export default genarateAccessToken