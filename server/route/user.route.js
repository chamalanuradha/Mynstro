import {Router} from "express";
import {registerUser, verifyEmail, login, logout} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/verifyemail', verifyEmail);
userRouter.post('/login', login);
userRouter.get('/logout', auth, logout )

export default userRouter;