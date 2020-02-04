//CONFIGURA CONEXAO COM MONGO 
const mongoose = require('mongoose')
mongoose.Promise = global.Promise 
module.exports = mongoose.connect('mongodb://localhost/seuendereco')


mongoose.Error.messages.general.required = "O  atributo '{PATH}' é obrigatoria "
mongoose.Error.messages.Number.min = "O {VALUE} informado é menor que o limite"
mongoose.Error.messages.Number.max = "O {VALUE} informado é maior que o limite"
mongoose.Error.messages.String.enum = "O {VALUE} não é valido para o atributo"