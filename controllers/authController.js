import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const loginForm = (req, res) => {
  res.render("auth/login", { error: null });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.render("auth/login", { error: "Invalid email or password" });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.render("auth/login", { error: "Invalid email or password" });
  }
  req.session.user = { id: user._id, name: user.name, email: user.email, role: user.role };
  res.redirect("/");
};

const registerForm = (req, res) => {
  res.render("auth/register", { error: null });
};

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const existing = await userModel.findOne({ email });
  if (existing) {
    return res.render("auth/register", { error: "Email already registered" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await userModel.create({ name, email, password: hashedPassword, role: role || "user" });
  res.redirect("/login");
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};

export { loginForm, login, registerForm, register, logout };