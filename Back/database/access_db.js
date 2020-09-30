/**
 * Este archivo simula el acceos a la base de datos, actualmente trabaja con 
 * un archivo json
 */
const orders = require('./orders.json')
/**
 * Obtengo los datos del cliente y sus ordenes
 * @param {int} clientid 
 */
function getOrders(clientid){
    var o = orders.find(x => x.client.id == clientid);
    return o
}

/**
 * Verifica si existe la orden en ese cliente, devuelve los datos de la orden
 * o si no lo encuentra, devuelve nulo
 * @param {int} cid id cliente
 * @param {int} oid id orden
 */
function getOrderDetails(cid, oid){
    var o = getOrders(cid);
    if(o == null){
        return null
    }
    od=o.orders.find(x => x.id == oid);
    return od
}

module.exports = {
    getOrders,
    getOrderDetails
}