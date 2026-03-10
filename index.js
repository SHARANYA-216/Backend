import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import { productRouter } from "./routes/ProductRoute.js";
import { storeRouter } from "./routes/storeRoute.js";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";

dotenv.config();

const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layout");
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
app.use("/products", productRouter);
// app.use("/users", userRouter);

const startServer = async () => {
  try {
    const PORT = process.env.PORT || 5000;

    console.log(`Starting server on port ${PORT}...`);
    await dbConnect();
    console.log("MongoDB connected");

    const server = app.listen(PORT, () => {
      console.log(`Server Started on port ${PORT}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.log(`Port ${PORT} is already in use. Stop the old node process and try again.`);
        return;
      }

      console.log("Server failed to start:", error);
    });

  } catch (error) {
    console.log("Server failed to start:", error);
  }
};

startServer();

