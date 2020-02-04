const Secuelado = require('sequelize');
const secuelado = require('../database/database')


const Intencao = secuelado.define("Intencao", {
    _id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Secuelado.INTEGER
    },
    intencao:{
        allowNull: false,
        type: Secuelado.STRING(300),
        validate: {
            len:[1,300]
        }
    },
    descricao:{
        allowNull: false,
        type: Secuelado.STRING(300),
    }
});

module.exports = Intencao;