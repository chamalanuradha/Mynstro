import { Router } from "express";
import {
  registerUser,
  login,
  logout,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/usercontroller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import { use } from "react";

const userRouter = Router();


userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/logout", auth, logout);


userRouter.get("/allusers", auth, getAllUsers);
userRouter.get("/:id", auth, getUserById);



userRouter.put("/:id",auth,upload.single("avatar"),updateUser);

userRouter.delete("/delete/:id",auth,deleteUser);

export default userRouter;
