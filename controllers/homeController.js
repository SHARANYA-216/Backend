import productModel from "../models/productModel.js";

const homePage = async (req, res) => {
  const products = await productModel.find();
  res.render("home/index", { products });
};
export default homePage