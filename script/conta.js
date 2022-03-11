/*
*   Dados
*/

let saldo, nome, senha,conta;

/*
let numeroTeleforne;
let cpf;
let endereco;
let email;
*/

function Conta(nome,senha,saldo){
    this.nome = nome,
    this.senha = senha,
    this.saldo = saldo;
}

/*
* Manipuladores das contas
*/

function getSaldo(conta){
    return Number(conta.saldo).toFixed(2);
}

function getNome(conta){
    return conta.nome;
}

function setSaldo(conta,valor){
    conta.saldo = valor;
}

function gerenciadorDeContas(conta,nome,senha,saldo){
    conta.nome = nome,
    conta.senha = senha,
    conta.saldo = saldo;
}