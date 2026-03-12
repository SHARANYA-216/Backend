import mongoose from "mongoose";

const dbConnect = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error(
      "MONGO_URI is not set. Add it to .env (or environment variables) before starting the server.",
    );
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:");
    console.error(err);
    throw err;
  }
};

export default dbConnect;