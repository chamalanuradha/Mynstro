import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import sendEmail from '../config/sendEmail.js';
import verifyEmailTemplate from '../utils/veryfyEmailTemplate.js'

export async function registerUser(request, response) {
  try {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return response.status(400).json({
        message: "Please fill all fields",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return response.status(400).json({
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
        email: request.body.email,
        url: verifyEmailUrl
      })
    });

    return response.json({
      message: "User registered successfully",
      error: false,
      success: true,
      data: newUser,
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || "Error registering user",
      error: true,
      success: false,
    });
  }
}
