let {getOrders, getOrderDetails} = require('../database/access_db' )

/**
 * busca en el json las ordenes del cliente
 * @param {id} clientid 
 */
function getAllOrders(clientid) {
    let cnt = getOrders(clientid)
    let success = 1;
    if(cnt == null){
        cnt = 'Error: No user found'
        success = 0
    }
    return {
        'success':success,
        'info': cnt
    }
}

/**
 * busca los detalles de la orden con ese id y el id de cliente
 * @param {int} cliendid id del cliente
 * @param {int} orderid id de la orden
 */
function getOrderDetail(cliendid, orderid){
    let cnt = getOrderDetails(cliendid, orderid)
    let success = 1;
    if(cnt == null){
        cnt = 'Error: No order found'
        success = 0
    }
    return {
        'success':success,
        'info': cnt
    }
}


module.exports = {
    getAllOrders,
    getOrderDetail
}