
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'UP' });
})
router.use('/orders', require('./orders.routes'))


module.exports = router