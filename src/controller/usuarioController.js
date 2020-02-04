const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const Usuario  = require('../models/usuario');

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({errors})
}

const cadastro = (req, res) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        sexo: req.body.sexo,
        email: req.body.email,
        senha: req.body.senha,
        telefone: req.body.telefone,
      })

        if (!email.match(emailRegex)) return res.status(400).send({ errors: ['O e-mail informa está inválido'] })
        if (!password.match(passwordRegex)) {
            return res.status(400).send({
                errors: [
                    "Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-20."]
            })
        }

        const error = usuario.validateSync();

        if (!error) {
            const salt = bcrypt.genSaltSync()
            usuario.senha = bcrypt.hashSync(usuario.senha, salt)
            Usuario.findOne({ email: req.body.email }, (erro, usuarioBanco) => {
            if (usuarioBanco) {
                res.status(400).send({ message: 'Usuario já está cadastrado' })
            } else {
                usuario.save((error) => {
                if (error) return sendErrorsFromDB(res, error);
                res.send({ message: 'Usuario criado com sucesso' });
                })
            }
            })
    
        } else {
            return sendErrorsFromDB(res, error);
        }

}

const login = (req, res) => {
    const email = req.body.email || ''
    const senha = req.body.senha || ''

    Usuario.findOne({email}, (error, user) => {
        if(error){
            return sendErrorsFromDB(res, error);
        } else if (user && bcrypt.compareSync(senha, user.senha)) {
                    const token  = jwt.sign(user, env.authSecret, {
                        expiresIn: "1 day"
                    })
            res.json({ message: 'O acesso está liberado para o usuario', token })
        } else {
            return res.status(400).send({errors: ['Usuário/Senha inválidos']}) 
        }
    })
}


module.exports = { login , cadastro }