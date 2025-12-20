import {Router} from "express";
import {registerUser, verifyEmail, login, logout, uploadAvatar, updateUser, forgetPassword, verifyOTP, resetPassword, refreshToken} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post("/verify-email/:id", verifyEmail);
userRouter.post('/login', login);
userRouter.get('/logout', auth, logout );
userRouter.put('/uploadavatar', auth, upload.single('avatar'), uploadAvatar);
userRouter.put('/updateuser', auth, updateUser);
userRouter.put('/forgotpassword', auth, forgetPassword);
userRouter.put('/verifyforgotpassword', verifyOTP);
userRouter.put('/resetpassword', resetPassword);
userRouter.post('/refreshtoken', refreshToken);



export default userRouter;