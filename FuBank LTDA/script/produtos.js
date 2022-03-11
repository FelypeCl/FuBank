/*
*   Compras de produtos
*/

let nomeProduto, valorProduto;

function Produto(nome, valor){
    this.nomeProduto = nome;
    this.valorProduto = valor;
}

function cobrarCustoProduto(conta,custo){
    conta.saldo -= custo;
}

const coca2L = new Produto("Coca-Cola 2L", 8.32);
const coxinha = new Produto("Coxinha", 5.50);
const pizza = new Produto("Pizza", 29.90);
let produtos = new Array(1);
produtos[0] = coca2L;
console.log(produtos[0]);

function comprarProduto(produto, identificao){
    switch(identificao){
        case 1:
                let item1 = document.getElementById("item1");
                item1.innerHTML = produto.nomeProduto + " -- -R$" + produto.valorProduto + " |";
                custo = produto.valorProduto;
                cobrarCustoProduto(contaUm, custo)
                carregarSaldo();
            break;
        case 2:
                let item2 = document.getElementById("item2");
                item2.innerHTML = produto.nomeProduto + " -- -R$" + produto.valorProduto + " |";
                custo = produto.valorProduto;
                cobrarCustoProduto(contaUm, custo)
                carregarSaldo();
            break;
        case 3:
                let item3 = document.getElementById("item3");
                item3.innerHTML = produto.nomeProduto + " -- -R$" + produto.valorProduto + " |";
                custo = produto.valorProduto;
                cobrarCustoProduto(contaUm, custo)
                carregarSaldo();
            break;
        case 4:
                let item4 = document.getElementById("item4");
                item4.innerHTML = produto.nomeProduto + " -- -R$" + produto.valorProduto + " |";
                custo = produto.valorProduto;
                cobrarCustoProduto(contaUm, custo)
                carregarSaldo();
            break;
        default:
            console.log("Identifição não definida."); 
    }
}