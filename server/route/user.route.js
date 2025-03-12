import {Router} from "express";
import {registerUser, verifyEmail, login, logout, uploadAvatar, updateUser, forgetPassword} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/verifyemail', verifyEmail);
userRouter.post('/login', login);
userRouter.get('/logout', auth, logout );
userRouter.put('/upload-avatar', auth, upload.single('avatar'), uploadAvatar);
userRouter.put('/updateuser', auth, updateUser);
userRouter.put('/forgotpassword', auth, forgetPassword);


export default userRouter;