const Secuelado = require('sequelize')

const environment = process.env.NODE_ENV || 'development'

const config = require('../config/config.js')[environment];

const secuelado = new Secuelado(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

secuelado.authenticate()
    .then(()  => console.log('Rodando Conexão com banco de dados '))
    .catch(err => console.log('Deu erro: ' + err))

module.exports = secuelado; //exportando sequelize


