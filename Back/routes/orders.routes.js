const { Router } = require('express');
const router = Router();

const orderController = require('../controllers/order.controller');

/**
 * endpoin para obtener listado de ordenes
 */
router.post('/getOrders/', (req, res) => {
    res.json(orderController.getAllOrders(req.body.iduser))
})

/**
 * endpoin para obtener el detalle de orden
 */
router.post('/getorderdetail/', (req, res) => {
    res.json(orderController.getOrderDetail(req.body.idc,req.body.id))
})

module.exports = router