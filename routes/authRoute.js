import express from "express";
import { loginForm, login, registerForm, register, logout } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.get("/login", loginForm);
authRouter.post("/login", login);
authRouter.get("/register", registerForm);
authRouter.post("/register", register);
authRouter.get("/logout", logout);

export default authRouter;