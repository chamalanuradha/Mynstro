import { Router } from "express";
import {
  registerUser,
  login,
  logout,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import { use } from "react";

const userRouter = Router();


userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/logout", auth, logout);


userRouter.get("/allusers", auth, getAllUsers);
userRouter.get("/:id", auth, getUserById);


userRouter.put(
  "/:id",
  auth,
  upload.single("avatar"),
  updateUser
);

export default userRouter;
