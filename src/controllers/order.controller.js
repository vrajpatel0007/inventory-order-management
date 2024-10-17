const orderService = require("../services/order.service");

// Place a new order
const placeOrder = async (req, res) => {
  const { id: customerId } = req.user._id;
  const { products } = req.body;
  console.log("🚀 ~ placeOrder ~ products:", products);
  try {
    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products in order" });
    }
    const order = await orderService.placeOrder(customerId, products);
    console.log("🚀 ~ placeOrder ~ order:", order);
    return res.status(200).json({ message: "Order placed successfully", order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  console.log("🚀 ~ updateOrderStatus ~ status:", status);
  try {
    const updatedOrder = await orderService.updateOrderStatus(id, status);
    return res.status(200).json({ message: "Order status updated successfully", order: updatedOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ getOrderById ~ id:", id);
  try {
    const order = await orderService.getOrderById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get all orders (Admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    console.log("🚀 ~ getAllOrders ~ orders:", orders);
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await orderService.getOrder(req.params.id);
    return res.status(200).json({ order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  placeOrder,
  updateOrderStatus,
  getOrderById,
  getAllOrders,
  getOrder
};
