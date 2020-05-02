// server imports
const { Router } = require('express');
const routes = Router();

// controller imports
const { viewAllOrders, viewBySlugOrder, storeOrder } = require('./controller/OrderController');

routes.get(`/order`, viewAllOrders);
routes.get(`/order/:slug`, viewBySlugOrder);

routes.post(`/order/store`, storeOrder);

module.exports = routes;
