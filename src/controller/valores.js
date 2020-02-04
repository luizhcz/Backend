//VALORES ESTÃO DENTRO DAS ENTIDADES 

const assistant = require('../token/assistant');
const workspace = 'e4465271-2c71-4d94-be6b-7121305e7836';


exports.list = (requisicao,resposta) => {
    const { entidade } = requisicao.body

    var parametros = {
        workspace_id: workspace,
        entity: entidade
    };

    assistant.listValues(parametros, function(erro,resp){
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

exports.add = (requisicao,resposta) => {
    var parametros;
    const { entidade, valor } = requisicao.body;
    const { sinonimos = [] } = requisicao.body || [];
    const { padraos = [] } = requisicao.body || null;


    if(padraos.length == 0 ||padraos == null)
    {
        parametros = {
            workspace_id: workspace,
            entity: entidade,
            value: valor ,
            synonyms: sinonimos,
        };
    }
    else
    {
        parametros = {
            workspace_id: workspace,
            entity: entidade,
            value: valor ,
            patterns: padraos,
        };
    }


    assistant.createValue(parametros, function(erro, resp){
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
    const { entidade, valor } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        entity: entidade,
        value: valor 
    };

    assistant.getValue(parametros, function(erro, resp){
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
    const { entidade, 
            valor, 
            novo_valor, 
            novo_tipo, 
            novo_sinonimo = [] || [],
            novo_padrao = [] || [] } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        entity: entidade,
        value: valor,
        new_value: novo_valor
    };
    
    if(novo_tipo != null)
        parametros.new_type = novo_tipo;

    if(novo_sinonimo.length !== 0){
        parametros.new_synonyms = novo_sinonimo;
        parametros.new_type = "synonyms";
    }
    else
    {
        if(novo_padrao.length !== 0)
        {
            parametros.new_patterns = novo_padrao;
            parametros.new_type = "patterns";
        }
            
    }


    assistant.updateValue(parametros, function(erro,resp){
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
    const { entidade, valor } = requisicao.body;

    var parametros = {
        workspace_id: workspace,
        entity: entidade,
        value: valor 
    };

    assistant.getValue(parametros, function(erro, resp){
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

