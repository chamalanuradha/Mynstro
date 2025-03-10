import {Router} from "express";
import {registerUser, verifyEmail} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/verifyemail', verifyEmail);

export default userRouter;