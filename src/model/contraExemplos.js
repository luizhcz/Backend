const Secuelado = require('sequelize');
const secuelado = require('../database/database');

const contraExemplos = secuelado.define("contraExemplos", {
    _id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Secuelado.INTEGER
    },
    texto:{
        allowNull: false,
        type: Secuelado.STRING(255),
        validate:{
            len: [2,255]
        }
    }
});

module.exports = contraExemplos;