
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
        console.log(url)
        console.log(err)
        if(err == null) {
            res.sendFile(url,{ root: __dirname });
            console.log('File exists');
        } else if(err.code === 'ENOENT') {
            // file does not exist
            res.sendFile('./images/error/file404.jpg',{ root: __dirname });
        } else {
            res.sendFile('./images/error/file404.jpg',{ root: __dirname });
        }
    });

    // console.log(fs.existsSync(url));
    // if(fs.existsSync(url)){
    //   res.sendFile(url,{ root: __dirname });
    // }else{
    //   res.sendFile('./images/error/file404.jpg',{ root: __dirname });
    // }
  });


module.exports = router