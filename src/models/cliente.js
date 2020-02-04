const restful = require('node-restful')
const mongoose = restful.mongoose

const ClientSchema = new mongoose.Schema({
    cnpj: { type: Number,min: [11, 'CNPJ invalido'],required: [true, 'CNPJ nao informado'] },
      razaoSocial: { type: String, trim: true, required: [true, 'Razao Social nao informado'] },
      nomeFantasia: { type: String, trim: true, required: [true, 'Nome Fantasia nao informado'] },
      endereco: {
        cep: { type: String, trim: true, min: [8, 'O CEP deve ter 8 digitos ou mais'], required: [true, 'CEP nao informado'] },
        numero: { type: Number, trim: true, required: [true, 'Numero nao informado'] },
        logradouro: { type: String, trim: true, required: [true, 'Logradouro nao informado'] },
        complemento: { type: String, trim: true, required: [true, 'Complemento nao informado'] },
      },
      criacaoEm: { type: Date, default: Date.now }
})

module.exports = restful.model('Cliente', ClientSchema)

