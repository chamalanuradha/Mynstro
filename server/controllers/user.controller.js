import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import sendEmail from '../config/sendEmail.js';
import verifyEmailTemplate from '../utils/veryfyEmailTemplate.js';
import genarateRefreshToken  from '../utils/refreshToken.js';
import  genarateAccessToken  from '../utils/accessToken.js';
import dotenv from 'dotenv';
import uploadImageCloudinary from "../utils/uploadImageCloudinary.js";
dotenv.config();

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new UserModel({ name, email, password: hashedPassword });
    const save = await newUser.save();   

    const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`;



    await sendEmail({
      sendTo: email,
      subject: "Verify email from Mynstro",
      html: verifyEmailTemplate({
        name: name,
        url: verifyEmailUrl
      })
    });

    return res.json({
      message: "User registered successfully",
      error: false,
      success: true,
      data: newUser,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error registering user",
      error: true,
      success: false,
    });
  }
}

export async function verifyEmail(req, res) {
  try {
    const { code } = req.query;

    const user = await UserModel.findOne({ _id: code });

    if (!user) {
      return res.status(400).json({
        message: "Invalid verification code",
        error: true,
        success: false,
      });
    }

    user.verify_email = true;
    await user.save();

    return res.json({
      message: "Email verified successfully",
      error: false,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error verifying email",
      error: true,
      success: false,
    });
  }  
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if(!email || !password){
      return res.status(400).json({
        message: "Please provide email and password",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        error: true,
        success: false,
      });
    }

    if(user.status !== 'Active'){
      return res.status(400).json({
        message: "Your account is not active. Please contact the administrator",
        error: true,
        success: false,
      })
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
        error: true,
        success: false,
      });
    }

    const accesstoken = await genarateAccessToken(user._id);
    const refreshToken = await genarateRefreshToken(user._id);

     
      user.refresh_token = refreshToken;
      await user.save();

    const cookiesOption = {
      httpOnly: true,
      sameSite: 'none',
      secure: true
    }

    res.cookie('refreshToken', refreshToken, cookiesOption);
    res.cookie('accesstoken', accesstoken, cookiesOption);

    return res.json({
      message: "Login successful",
      error: false,
      success: true,
      data: {
        accesstoken,
        refreshToken,
        user
      }
    })
    } catch (error) {
    return res.status(500).json({
      message: error.message || "Error logging in",
      error: true,
      success: false,
    });
    }
}

export async function logout(req,res){
  try {
const {userid} = req.userId;


    const cookiesOption = {
      httpOnly: true,
      sameSite: 'none',
      secure: true
    }

    res.clearCookie('refreshToken',cookiesOption);
    res.clearCookie('accesstoken',cookiesOption);

    const removeRefreshToken = await UserModel.findOneAndUpdate(userid,{
      refresh_token:""
    });

    return res.json({
      message: "Logout successful",
      error: false,
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error logging out",
      error: true,
      success: false,
    })
    
  }
}

export async function uploadAvatar(req,res){
  try {
    const {userid} = req.userId;
    const image = req.file;
    

  const uploadAvatar = await uploadImageCloudinary(image);
  const updateAvatar = await UserModel.findOneAndUpdate(userid,{
    avatar: uploadAvatar.url
  })



  return res.status(200).json({
    message: "Avatar uploaded successfully",
    error: false,
    success: true,
    data: {
      userid: req.userId,
      avatar: uploadAvatar.url
    }
  })

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error uploading avatar",
      error: true,
      success: false,
    })

  }
}

export async function updateUser(req, res) {
  try {
    const { userid } = req.userId;
    const { name, email, password, mobile } = req.body;

    const updateuser = await UserModel.findOneAndUpdate(userid, {
      name,
      email,
      password,
      mobile,
    });

    return res.status(200).json({
      message: "User updated successfully",
      error: false,
      success: true,
      data: {
        userid: req.userId,
        name,
        email,
        password,
        phone,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error updating user",
      error: true,
      success: false,
    
  })
}
}