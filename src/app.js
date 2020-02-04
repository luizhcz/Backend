//INICIO DA APLICAÇÃO
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) //recebe o servidor como parametro