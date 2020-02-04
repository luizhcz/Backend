require('dotenv').config()
const assistant = require('../token/assistant');


exports.message  = (req,res) => {
    const { text, context  = {} } = req.body;
        
    const params = {
        input: { text },
        workspace_id: 'e4465271-2c71-4d94-be6b-7121305e7836',
        context,
    }

    assistant.message(params, (err, response) => {
        if(err){
            res.status(500).json(err);
        }
        else
        {
            res.json(response);
        }
    });
};

//espelhado no message
exports.conversa = (req,res) => {
    const { input, context  = {} } = req.body;
    let payload = {
        workspace_id: 'e4465271-2c71-4d94-be6b-7121305e7836',
        context,
        input: input 
    };

    assistant.message(payload, function(erro,resposta){
        if(erro)
        {
            res.status(500).json(erro);
        }
        else
        {
            res.json(trataResposta(payload, resposta));
        }
    });
}


const trataResposta = (payload,resposta) =>  {
    return resposta
}