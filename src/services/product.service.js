const Product = require('../models/product.modal');

const createProduct = async (data) => {
    const product = new Product(data);
    return await product.save();
}
const updateProduct = async (id, updateData) => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
}
const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}
const getAllProducts = async () => {
    return await Product.find();
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
};
