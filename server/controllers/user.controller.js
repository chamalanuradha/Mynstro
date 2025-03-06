import UserModel from "../models/user.model";
import bcrypt from "bcrypt";

export async function registerUser(request, response) {
  try {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      response.status(400).json({
        message: "Please fill all fields",
        error: true,
        success: false,
      })
    }

    const user = await UserModel.findOne({ email });


    if (user) {
      response.status(400).json({
        message: "User already exists",
        error: true,
        success: false,
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

   
    
  } catch (error) {
    response.status(500).json({
      message: error.message || "Error registering user",
      error: true,
      success: false,

    })

    
  }
}