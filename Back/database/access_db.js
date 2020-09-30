const orders = require('./orders.json')

function getOrders(clientid){
    // var cta = db.find(x => x.nocuenta == cuenta);
    // if(cta == null){
    //     return null
    // }
    // if(tipo == 0){
    //     return cta
    // }else{
    //     return cta.tipo == tipo? cta:null
    // }
}

function addRetiro(nc, monto){
    let cuenta = db.find(x => x.nocuenta == nc);
    cuenta.Disponible = cuenta.Disponible - monto;
    cuenta.demora = false;

    let doc = Math.floor(Math.random() * 1000000) + 1;  
    var dt = new Date();
    var ndate = (`${
        dt.getFullYear().toString().padStart(4, '0')}-${
        (dt.getMonth()+1).toString().padStart(2, '0')}-${
        dt.getDate().toString().padStart(2, '0')}-${
        dt.getHours().toString().padStart(2, '0')}:${
        dt.getMinutes().toString().padStart(2, '0')}:${
        dt.getSeconds().toString().padStart(2, '0')}`
    );
    cuenta.retiros.push({
        "fecha":ndate,
        "descripcion":"Retiro en efectivo no. "+doc,
        "Monto": monto
    });
    return true;
}

module.exports = {
    getOrders,
    addRetiro
}