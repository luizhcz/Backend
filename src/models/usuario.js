const restful = require('node-restful')
const mongoose = restful.mongoose


const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: [true, 'Nome nao informado'] },
    sexo: { type: String, required: [true, 'Sexo nao informado'] },
    email: { type: String, required: [true, 'E-mail nao informado'] },
    senha: { type: String, min: [8, 'Minimo 8 caracteres'], required: [true, 'Senha nao informada'] },
    telefone: { type: Number, min: [8, 'Telefone insuficiente'], required: [true, 'Telefone nao informado'] }
})


module.exports = mongoose.model('Usuario', usuarioSchema);