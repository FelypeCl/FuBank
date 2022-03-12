//Conta 1
function sacar(conta, valorSacar){
    conta.saldo -= valorSacar;
    localStorage.setItem("saldo", conta.saldo);
}

document.getElementById("botaoSacar").addEventListener("click", function(event){
    var valor = prompt("Informe o valor:");
    sacar(conta, Number(valor));
    carregarSaldo();
})

//Conta 2
function sacar2(conta, valorSacar){
    conta.saldo -= valorSacar;
    localStorage.setItem("saldo2", conta.saldo);
}

document.getElementById("botaoSacar2").addEventListener("click", function(event){
    var valor = prompt("Informe o valor:");
    sacar2(conta2, Number(valor));
    carregarSaldo2();
})