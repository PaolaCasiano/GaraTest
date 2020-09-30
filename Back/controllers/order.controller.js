let {getOrders, getOrderDet} = require('../database/access_db' )


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

function getOrderDetail(cliendid, orderid){
    let cnt = getOrders(cliendid)
    let success = 1;
    if(cnt == null){
        cnt = 'Error: No order found'
        success = 0
    }else{
        console.log(orderid)
        cnt=cnt.orders.find(x => x.id == orderid);
    }
    if(cnt == null){
        cnt = 'Error: No details found'
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