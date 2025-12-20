import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import sendEmail from '../config/sendEmail.js';
import verifyEmailTemplate from '../utils/veryfyEmailTemplate.js';
import forgotPasswordTemplate from '../utils/forgotPasswordTemplate.js';
import genarateRefreshToken  from '../utils/refreshToken.js';
import  genarateAccessToken  from '../utils/accessToken.js';
import dotenv from 'dotenv';
import uploadImageCloudinary from "../utils/uploadImageCloudinary.js";
import generateOTP from "../utils/genarateOTP.js";
import jwt from "jsonwebtoken";
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

    const verifyEmailUrl = `${process.env.BACKEND_URL}/verify-email/${save._id}`;



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

    if(!image){
      return res.status(400).json({
        message: "No image uploaded",
        error: true,
        success: false,
      })
    }
    

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

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const updateuser = await UserModel.findOneAndUpdate(userid, {
      name,
      email,
      password : hashedPassword,
      mobile,
    });
    const updateduser = await UserModel.findOneAndUpdate(userid);

    return res.status(200).json({
      message: "User updated successfully",
      error: false,
      success: true,
      data: updateduser
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error updating user",
      error: true,
      success: false,
    
  })
}
}

export async function forgetPassword(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        error: true,
        success: false,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Email is not found",
        error: true,
        success: false,
      });
    }

    const forget_password_otp = generateOTP();
    const forget_password_expiry = new Date + 60 * 60 * 1000;

    const updateuser = await UserModel.findByIdAndUpdate(user._id, {
      forget_password_otp,
      forget_password_expiry: new Date(forget_password_expiry).toISOString(),
    });

    const updateduser = await UserModel.findOne( user._id);

    console.log(updateduser);
    await sendEmail({
      sendTo: email,
      subject: "forgot Password OTP from Mynstro",
      html: forgotPasswordTemplate({
        name: updateduser.name,
        otp: updateduser.forget_password_otp,
      })
    });

    return res.status(200).json({
      message: "Check your email for reset password OTP",
      error: false,
      success: true
    });

   
    

    
} catch (error) {
    return res.status(500).json({
      message: error.message || "Error sending reset password link",
      error: true,
      success: false,
    });
  }
}

export async function verifyOTP(req, res) {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Email is not found",
        error: true,
        success: false,
      });
    }

    if (user.forget_password_otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }
  
  return res.status(200).json({
    message: "OTP verified successfully",
    error: false,
    success: true,
  })
} catch (error) {
  return res.status(500).json({
    message: error.message || "Error verifying OTP",
    error: true,
    success: false,
  });
}
}

export async function resetPassword(req, res) {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    if(!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
        message: "Please fill all the fields",
        error: true,
        success: false,
      })
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Email is not found",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "New password and confirm password do not match",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(newPassword, salt);
  
    const update = await UserModel.findOneAndUpdate (usee._id,{
      password: hashedPassword
    })


    return res.status(200).json({
      message: "Password reset successfully",
      error: false,
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error resetting password",
      error: true,
      success: false,
    });
  }
}

export async function refreshToken(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken || req.headers?.authorization?.split(" ")[1];

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token is required",
        error: true,
        success: false,
      });
    }

    const verifyToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    if (!verifyToken || !verifyToken.userId) {
      return res.status(401).json({
        message: "Invalid refresh token",
        error: true,
        success: false,
      });
    }

    const user = verifyToken.userId;  
    console.log("User ID from token:", user); 

    const newAccessToken = await genarateAccessToken(user);  
    const cookiesOption = {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    };

    res.cookie('accessToken', newAccessToken, cookiesOption);

    return res.status(200).json({
      message: "Token refreshed successfully",
      error: false,
      success: true,
      data: {
        accessToken: newAccessToken, 
      }
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error refreshing token",
      error: true,
      success: false,
    });
  }
}

