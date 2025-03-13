import {Router} from "express";
import {registerUser, verifyEmail, login, logout, uploadAvatar, updateUser, forgetPassword, verifyOTP, resetPassword} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/verifyemail', verifyEmail);
userRouter.post('/login', login);
userRouter.get('/logout', auth, logout );
userRouter.put('/uploadavatar', auth, upload.single('avatar'), uploadAvatar);
userRouter.put('/updateuser', auth, updateUser);
userRouter.put('/forgotpassword', auth, forgetPassword);
userRouter.put('/verifyforgotpassword', verifyOTP);
userRouter.put('/resetpassword', resetPassword);


export default userRouter;