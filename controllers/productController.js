import productModel from "../models/productModel.js";

const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.render("products/index", { products });
};

const addProduct = async (req, res) => {
  const product = req.body;
  await productModel.create(product);
  res.redirect("/products");
};

const addProductForm = async (req,res) => {
  res.render("products/add")
}
const editProductForm = async (req,res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);    
    res.render("products/edit", { product });
}
const saveProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    await productModel.findByIdAndUpdate(id, product);
    res.redirect("/products");
}
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await productModel.findByIdAndDelete(id);
    res.redirect("/products");
}
const updateProduct = async (req, res) =>{
    const id = req.params.id;
    const product = req.body;
    await productModel.findByIdAndUpdate(id, product);
    res.redirect("/products");
}
export { getProducts,addProduct,addProductForm,editProductForm,saveProduct,deleteProduct,updateProduct };










