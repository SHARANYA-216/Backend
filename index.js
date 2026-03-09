import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
// import {productRouter} from "./routes/productRoute.js";
import { storeRouter } from "./routes/storeRoute.js";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";

dotenv.config();

dbConnect(); //connects mongodb server to render server

const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", storeRouter);
// app.use("/auth", authRouter);
// app.use("/products", productRouter);
// app.use("/users", userRouter);

const startServer = async () => {
  try {
    await dbConnect();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server Started on port ${PORT}`);
    });

  } catch (error) {
    console.log("Server failed to start:", error);
  }
};

startServer();

