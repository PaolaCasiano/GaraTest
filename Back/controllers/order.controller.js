let {getOrders} = require('../database/access_db' )


function getAllOrders(clientid) {
    var cnt = getOrders(clientid)
    return {
        success:0,
        info: cnt
    }
}


module.exports = {
    getAllOrders
}