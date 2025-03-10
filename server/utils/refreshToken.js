import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../models/user.model.js';
dotenv.config();

const genarateRefreshToken = async (userId) => {

    const token = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '30d'
    })

    const  updateToken = await UserModel.updateOne(
        { _id: userId }, 
        { refreshToken: token })

    return token

}

export default genarateRefreshToken