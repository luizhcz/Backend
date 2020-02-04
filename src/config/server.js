const port = 5454 // porta que vai ser rodada a aplicação
const bodyParser = require('body-parser') //midller 
const express = require('express') //retorna a mesma intancia
const server = express()    //retornar um novo servidor
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true })) //consegue interpretar mais dados no JSON
server.use(bodyParser.json()) //FAZ O PARSE
server.use(allowCors)//HABILITA O CORS
server.use(queryParser())//troca campos string por int 

server.listen(port, function(){ //fica escutando a porta 5454
    console.log(`BACKEND is running on port ${port}. `)
})

module.exports = server