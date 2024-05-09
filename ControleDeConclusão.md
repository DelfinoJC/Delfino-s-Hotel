**BIBLIOTECAS INSTALADAS**

_npm init -y_ -> NODE MODULES

_npm i typescript -D_ -> TYPESCRIPT

_npx tsc --init_ -> ARQUIVO DE CONFIGURAÇÃO TYPESCRIPT

_npm i ts-node-dev -D_ -> CONPILADOR DE LINGUAGEM

_npm i express && npm i @types/express_ -> SIMULADOR DE SERVIDOR HTTP E SUA TIPAGEM

_npm i mongoose_ -> MELHOR COMUNICAÇÃO COM O MONGODB

_npm i dotenv_ -> LIB DE VARIÁVEL DE AMBIENTE

_npm i yup_ -> VALIDAÇÃO DE REQUISIÇÃO

_npm i jsonwebtoken_ -> CRIAÇÃO DE TOKEN

_npm i bcrypt_ -> CRIPTOGRAFIA

_npm i vitest_ -> BIBLIOTECA DE TESTES

## Sprint 01 (De 03 a 09/05)

Sprint inicial

```plaintext
 [ X ] Setup inicial - Estrutura de pastas e arquivos básicos
 [ X ] Criação de repositório no Github
 [ X ] Configurações de Banco de Dados
 [ X ] Criação de um servidor básico no Express
 [ X ] Criação do middleware de validação
 [ X ] Criar entidades (interfaces)
 [ X ] Criar models
 [ X ] - Criar camadas reponsáveis pela entidade GUEST
        [ X ] - ROTA
        [ X ] - CONTROLER
        [ X ] - SERVIÇOS
        [ X ] - REPOSITORIO

 [ X ] 1. Cadastro do Hóspede - POST /guests
        [ X ] - Receber os campos necessários para criar um usuário
                [ X ] - Usar middleware para validação de requisição;
                [ X ] - Usar Schema de validação usando yup
        [ X ] - Verficar se já existe um usuário com o mesmo email
        [ X ] - Criptografar a senha (Provider de criptografia)

 [ X ] 2. Login do Hóspede - POST /guests/auth
         [ X ] - Comparar senhas criptografada com senha da requisição
         [ X ] - Utilizar JWT (Provider de Token)
         [ X ] - Como diferenciar um token de hóspede de um token de gerente? 🤔
         
 [ - ] 3. Login de Gerente - POST /admin/auth
         [ X ] Cadastrar um gerente no banco de dados
         - Vale a pena ter dois middleware diferentes pra algo tão parecido??? não. 🤔
```


2. Citar o que faltou para completar itens iniciados
        - Testar se está funcionando


3. Entender os itens que não foram iniciados
        - Estava ajudando os colegas a pelo menos iniciar o projeto;
        - Talvez um pouco organização
