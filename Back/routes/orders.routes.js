const { Router } = require('express');
const router = Router();

const orderController = require('../controllers/order.controller');

router.post('/getOrders/', (req, res) => {
    console.log(req.body)
    res.json(orderController.getAllOrders(req.body.iduser))
})

router.post('/getorderdetail/', (req, res) => {
    res.json(orderController.getOrderDetail(req.body.idc,req.body.id))
})

module.exports = router