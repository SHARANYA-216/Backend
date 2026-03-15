import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  rating: { type: Number, step: 0.1, min: 0, max: 5 },
});
const productModel = mongoose.model("products", productSchema);
export default productModel;