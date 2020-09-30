const { Router } = require('express');
const router = Router();

const orderController = require('../controllers/order.controller');

router.post('/getOrders/:id', (req, res) => {
    res.json(orderController.getAllOrders(req.params.id))
})

module.exports = router