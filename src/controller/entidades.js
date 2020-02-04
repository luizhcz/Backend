//ENTIDADE É USADA PARA AUXILIAR O BOT A IDENTIFICAR SUBSTANTIVOS NA RESPOSTA DO USUARIO 

const assistant = require('../token/assistant');
const workspace = 'e4465271-2c71-4d94-be6b-7121305e7836';


exports.list = (requisicao, resposta) => {

    const parametros = {
        workspace_id:workspace
    }

    assistant.listEntities(parametros, function(erro, resp){
        if(erro){
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });
};

exports.create = (requisicao,resposta) => {
    const { entidade, valores = [ valor ] } = requisicao.body;
    const value = valores.valor;

    var parametros = {
        workspace_id: workspace,
        entity: entidade,
        values: [ value ]
    }

    assistant.createEntity(parametros,function(erro,resp){
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

exports.listById = (requisicao,resposta) => {
    const { entidade } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        entity: entidade
    };

    assistant.getEntity(parametros, function(erro,resp){
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
    const { entidade, nova_entidade, nova_descricao }   = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        entity: entidade,
        new_entity: nova_entidade,
        new_description: nova_descricao
    };

    assistant.updateEntity(parametros, function(erro,resp){
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
    const { entidade } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        entity: entidade
    };

    assistant.deleteEntity(parametros, function(erro,resp){
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