const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const productRoute = require("./product.route");
const orderRoute = require("./order.route");

routes.use("/user", userRoute);
routes.use("/product", productRoute);
routes.use("/order", orderRoute);

module.exports = routes;
