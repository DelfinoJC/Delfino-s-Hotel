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

 [ X ] 3. **Login de Gerente - POST /admin/auth**
         [ X ] Cadastrar um gerente no banco de dados
         [ X ] Vale a pena ter dois middleware diferentes pra algo tão parecido??? não. 🤔

```

## Sprint 02 (De 10 a 16/05)

[ - ] 4. **Cadastro de Quarto (ROTA PRIVADA - ADMIN)**

   [ X ] - Informações necessárias: number, type, gest_capacity, daily_rate e photo. O status inicial é sempre disponível.
        **tipos de quartos:**
        
                Quarto Queen: um quarto de hotel com uma cama de casal, sendo a cama de tamanho padrão.
                Quarto King: um quarto de hotel com uma cama de tamanho king-size.
                Quarto Twin: um quarto que contém duas camas de solteiro, mas apenas um hóspede ocupa.

   [ ] - Não permitir o envio se o usuário que está executando a ação não for um administrador

[ ] 5. **Alterar Status Quarto (Check in, checkout e manutenção) (ROTA PRIVADA - ADMIN)**

   [ ] - Rota para alterar o status do quarto entre: "disponível", "ocupado", "em manutenção"
   [ ] - Não permitir o envio se o usuário que está executando a ação não for um administrador

[ ] 6. **Listar Todos os Quartos disponíveis**

   [ ] - Deve listar os quartos com status "disponível"

[ ] 7. **Listar Todos os Quartos disponíveis por data**
   [ ] - Deve listar os quartos com status "disponível".
   [ ] - Deve listar apenas os quartos que não possuirem reserva "confirmada" ou "em andamento" na data especificada.


# OBSERVAÇÕES DA PRIMEIRA SEMANA

2. Citar o que faltou para completar itens iniciados - Testar se está funcionando

3. Entender os itens que não foram iniciados - Estava ajudando os colegas a pelo menos iniciar o projeto; - Talvez um pouco organização
