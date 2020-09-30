const orders = require('./orders.json')
/**
 * 
 * @param {id de cliente} clientid 
 */
function getOrders(clientid){
    var o = orders.find(x => x.client.id == clientid);
    return o
}

module.exports = {
    getOrders
}