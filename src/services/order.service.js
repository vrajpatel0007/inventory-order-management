const Order = require('../models/order.modal');
const Product = require('../models/product.modal');
const User = require('../models/user.model');

const placeOrder = async (customerId, products) => {
    let totalPrice = 0;

    const orderItems = await Promise.all(products.map(async (item) => {
        const product = await Product.findById(item.product);
        if (!product) {
            return ("Product not found");
        }
        if (product.stock < item.quantity) {
            return ("Product out of stock");
        }

        product.stock -= item.quantity;
        await product.save();

        totalPrice += product.price * item.quantity;

        return { product: product._id, quantity: item.quantity };
    }));

    const order = new Order({
        customer: customerId,
        products: orderItems,
        totalPrice
    });

    const savedOrder = await order.save();


    await User.findByIdAndUpdate(customerId, { $push: { orders: savedOrder._id } });

    return savedOrder;
};


const updateOrderStatus = async (orderId, status) => {
    return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
};

const getOrderById = async (orderId) => {
    return await Order.findById(orderId).populate('products');
};

const getAllOrders = async () => {
    return await Order.find().populate('products');
};

const getOrder = async (orderId) => {
    return await Order.findById(orderId).populate('products');
};

module.exports = {
    placeOrder,
    updateOrderStatus,
    getOrderById,
    getAllOrders,
    getOrder
};
