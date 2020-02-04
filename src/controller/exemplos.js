const assistant = require('../token/assistant');
const workspace = 'e4465271-2c71-4d94-be6b-7121305e7836';

exports.list = (requisicao,resposta) => {
    const { intencao } = requisicao.body

    var parametros = {
        workspace_id: workspace,
        intent: intencao
    }

    assistant.listExamples(parametros, function(erro, resp){
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

exports.create = (requisicao,resposta) => {
    const { intencao, texto } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intencao,
        text: texto
    }

    assistant.createExample(parametros, function(erro,resp){
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
    const { intencao, texto } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intencao,
        text: texto
    }

    assistant.getExample(parametros, function(erro, resp){
        if(erro)
        {
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });

}

exports.update = (requisicao, resposta) => {
    const { intencao, texto, novo_texto } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intencao,
        text: texto,
        new_text: novo_texto
    }

    assistant.updateExample(parametros, function(erro, resp){
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

exports.delete = (requisicao, resposta) => {
    const { intencao, texto } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intencao,
        text: texto
    };

    assistant.deleteExample(parametros, function(erro,resp){
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
