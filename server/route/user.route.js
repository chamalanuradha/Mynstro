import {Router} from "express";
import {registerUser, verifyEmail, login} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/verifyemail', verifyEmail);
userRouter.post('/login', login);

export default userRouter;