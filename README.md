# Backend

## Getting Started
  Faça o seu controle de usuario e cliente usando está API basica.

* Usuario/cadastro
* Usuario/Login
* Cliente/cadastro

## Usuario/cadastro
  Cadastro de usuarios com acesso liberado.
 
### Objeto 
```
  { 
    "nome": "seu nome", 
    "sexo": "seu Sexo", 
    "email": "seu email com @", 
    "senha": "sua senha", 
    "telefone": seu telefone
  }
```
  
### Resposta
```
  {
    message: 'Usuario criado com sucesso'
  }
```
  
## Usuario/login
  Entrada em sua plataforma gerando um token jwt.
 
### Objeto 
```
  { 
    "email": "seu email com @", 
    "senha": "sua senha"
  }
```

### Resposta
```
  {
    message: 'O acesso foi liberado',
    token : "token"
  }
```
  
## Cliente/cadastro
  Cadastro de clientes com acesso restritos.
 
### Objeto 
```
  { 
    "cnpj":"cnpj da empresa", 
    "razaoSocial":"razao social da empresa", 
    "nomeFantasia":"nome fantasia da empresa", 
    "endereco": { 
        "cep":"cep da empresa", 
        "numero":"numero da empresa", 
        "logradouro": "rua da empresa", 
        "complemento":"complemento da rua" 
      } 
   }
```
 
 ### Resposta
```
    { 
    "cnpj":"cnpj da empresa", 
    "razaoSocial":"razao social da empresa", 
    "nomeFantasia":"nome fantasia da empresa", 
    "endereco": { 
        "cep":"cep da empresa", 
        "numero":"numero da empresa", 
        "logradouro": "rua da empresa", 
        "complemento":"complemento da rua" 
      } 
    }
```
 
  
