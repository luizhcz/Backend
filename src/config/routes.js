const express = require('express')
const auth = require('./auth')

const cliente = require('../controller/clienteController')
const usuario = require('../controller/usuarioController')

module.exports = function(server){

    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)

    
    protectedApi.post('cliente/cadastro', cliente.cadastro)
    
    const openApi = express.Router()
    server.use('/oapi', openApi)

    openApi.post('usuario/cadastro', usuario.cadastro)
    openApi.post('usuario/login', usuario.login)
}
