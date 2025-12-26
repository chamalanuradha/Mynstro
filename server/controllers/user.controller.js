import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import dotenv from 'dotenv';
import { generateToken } from "../utils/jwt.js";
dotenv.config();

export async function registerUser(req, res) {
  try {
    const { name, email, password, role } = req.body;

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

    const newUser = new UserModel({ name, email, password: hashedPassword , role });
    const save = await newUser.save();   

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

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    if (user.status !== "Active") {
      return res.status(403).json({
        message: "Account not active",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const token = generateToken(user._id);

    return res.json({
      message: "Login successful",
      success: true,
      data: {
        token,
        user
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
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

export async function getAllUsers(req, res) {
  try {
     const users = await UserModel.find();
    return res.json({
      message: "Users fetched successfully",
      error: false,
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error fetching users",
      error: true,  
      success: false,
    });
  }
}


export async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    return res.json({
      message: "User fetched successfully",
      error: false,
      success: true,
      data: user,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error fetching user",
      error: true,
      success: false,
    });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, mobile, address, role, status } = req.body;

    const updateData = {
      name,
      email,
      mobile,
      address,
      role,
      status,
    };

    // avatar upload (multer)
    if (req.file) {
      updateData.avatar = req.file.path; // or req.file.filename
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    return res.json({
      message: "User updated successfully",
      error: false,
      success: true,
      data: updatedUser,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error updating user",
      error: true,
      success: false,
    });
  }
}

