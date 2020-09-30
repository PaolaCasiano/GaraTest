
const { Router } = require('express');
const router = Router();
const multipart = require('connect-multiparty');
const fs = require('fs')
var path = require('path'); 


router.get('/', (req, res) => {
    res.json({ message: 'UP' });
})
router.use('/orders', require('./orders.routes'))

const multipartMidelware = multipart({
    uploadDir: './'
})

router.get('/img_str/:image' , multipartMidelware,(req, res) => {
    let url = `./images/${req.params.image}`;

    fs.stat(url, function(err, stat) {
        res.sendFile(url,{ root: __dirname });
    });

  });


module.exports = router