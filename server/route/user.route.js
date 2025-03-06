import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/register', registerUser);

export default userRouter;