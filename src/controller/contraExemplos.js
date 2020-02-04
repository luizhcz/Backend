const assistant = require('../token/assistant');
const workspace = 'e4465271-2c71-4d94-be6b-7121305e7836';



exports.list = (requisicao,resposta) =>{
    var parametros = {
        workspace_id: workspace
    };
        assistant.listCounterexamples(parametros, function(erro, resp){
            if(erro){
                resposta.status(500).json(erro);
            }
            else
            {
                resposta.json(resp);
            }
        });
};

exports.create = (requisicao, resposta) => {
    var parametros = {
        workspace_id: workspace,
        text: contra_Exemplo
    };

    assistant.createCounterexample(parametros, function(erro,resp){
        if(erro)
        {
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });
};

exports.listById = (requisicao, resposta) => {
    const { contra_Exemplo } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        text: contra_Exemplo
    };

    assistant.getCounterexample(parametros, function(erro,resp){
        if(erro)
        {
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });
};

exports.update = (requisicao,resposta) => {
    const { contra_Exemplo, novo_Contra_Exemplo } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        text: contra_Exemplo,
        new_text: novo_Contra_Exemplo
    };

    assistant.updateCounterexample(parametros, function(erro, resp) {
        if(erro)
        {
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });
};

exports.delete = (requisicao,resposta) => {
    const { contra_Exemplo } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        text: contra_Exemplo
    };

    assistant.getCounterexample(parametros, function(erro,resp){
        if(erro)
        {
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });
};
