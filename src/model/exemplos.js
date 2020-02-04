const Secuelado = require('sequelize');
const secuelado = require('../database/database');

const Exemplos = secuelado.define("exemplos", {
    _id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Secuelado.INTEGER
    }
});

module.exports = Exemplos;