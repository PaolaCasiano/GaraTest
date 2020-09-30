const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors')
const apiRoutes = require('./routes');

app.set('PORT', process.env.PORT || 4000);

app.use(express.json())

app.use(cors())

app.use('/', apiRoutes);

app.listen(app.get('PORT'), () => {
    console.log('Servidor levantado en el puerto', app.get('PORT'));
});