const Client = require('../models/cliente');
const _ = require('lodash')

const cadastro = (req, res) => {
    const client = new Client({
        cnpj: parseInt(req.body.cnpj),
        razaoSocial: req.body.razaoSocial,
        nomeFantasia: req.body.nomeFantasia,
        endereco: { 
          cep: req.body.endereco.cep,
          numero: req.body.endereco.numero,
          logradouro: req.body.endereco.logradouro,
          complemento: req.body.endereco.complemento,
        }
    })

    const error =  client.validateSync();

    if(!error) {
        Client.findOne({ cnpj: req.body.cnpj }, (error, clientBD) => {
            if(clientBD){
                res.status(400).send({ message: "Cliente já está cadastrado" })
            } else {
                client.save((error, client) => {
                    if(error) {
                        return sendErrorsFromDB(res, error)
                    }
                    res.send({client});
                })
            }
        })
    } else {
        return sendErrorsFromDB(res, error)
    }
}

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({errors})
}


module.exports = { cadastro }


