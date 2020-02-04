const assistant = require('../token/assistant');
const workspace = 'e4465271-2c71-4d94-be6b-7121305e7836';

//parent é o nome do proximo nó
exports.list = (req,resposta) => {
    var parametros = {
        workspace_id: workspace,
    };

    assistant.listDialogNodes(parametros, function(erro,resp){
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





/*
    dialog_node = id do dialogo
    parent = nó pai em um filho
    ***Nós pais não tem parent***
    previous_sibling = irmaos que compartilham do mesmo pai, recebe o id do irmao
    ***Não é preciso colocar no irmao principal***
    next_step = especifica outro nó que deve ser excutado em seguida


*/



