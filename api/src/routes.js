// server imports
const { Router } = require('express');
const routes = Router();

// controller imports
const { viewAllOrders, storeOrder } = require('./controller/OrderController');

routes.get(`/orders`, viewAllOrders);
routes.post(`/order/store`, storeOrder);

module.exports = routes;
