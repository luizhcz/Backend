const assistant = require('../token/assistant');
const workspace = 'e4465271-2c71-4d94-be6b-7121305e7836';


exports.list = (requisicao,resposta) => {
    const parametros = {
        workspace_id: workspace
    };

    assistant.listIntents(parametros, function(erro, resp){
        if(erro){
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });
}; //Inutilizavel

exports.create = (requisicao, resposta) => {
    const { intent, description,examples } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intent,
        description: description,
        examples: examples
    };

    assistant.createIntent(parametros, function(erro, resp){
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
exports.createInutil = (requisicao, resposta) => {
    const { intencao, exemplos = [] } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intencao,
        examples: exemplos
    };

    assistant.createIntent(parametros, function(erro, resp){
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
    const { intencao } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intencao
    }

    assistant.getIntent(parametros, function (erro, resp){
        if(erro)
        {
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });
}; //Inutilizavel

exports.update = (requisicao,resposta) => {
    const {
        intent,
        new_intent,
        new_description,
        new_examples
        } = requisicao.body;


    var parametros = {
        workspace_id:workspace,
        intent: intent,
        new_examples: new_examples || []
    }

    if(new_intent !== ""){
        parametros.new_intent = new_intent;
    }

    if(new_description !== ""){
        parametros.new_description = new_description;
    }

    assistant.updateIntent(parametros, function(erro, resp){
        erro = true;
        if(erro){
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });

};
exports.updateInutil = (requisicao,resposta) => {
    const {
        intencao,
        novo_exemplo = [ texto ],
        nova_descricao
        } = requisicao.body;

    const text = novo_exemplo.texto;

    var parametros = {
        workspace_id:workspace,
        intent: intencao,
        new_examples: [ text ],
        new_description: nova_descricao
    }

    assistant.updateIntent(parametros, function(erro, resp){
        if(erro){
            resposta.status(500).json(erro);
        }
        else
        {
            resposta.json(resp);
        }
    });

};

exports.delete = (requisicao,resposta) => {
    const { intencao } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        intent: intencao
    };

    assistant.deleteIntent(parametros, function(erro,resp){
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
