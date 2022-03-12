// Conta 1
function depositar(conta,valorDepositar){
    conta.saldo += valorDepositar;
    localStorage.setItem("saldo", conta.saldo);
}

document.getElementById("botaoDepositar").addEventListener("click",function(event){
    var valor=prompt("Informe o valor:")
    depositar(conta, Number(valor));
    carregarSaldo();
});

//Conta 2
function depositar2(conta,valorDepositar){
    conta.saldo += valorDepositar;
    localStorage.setItem("saldo2", conta.saldo);
}

document.getElementById("botaoDepositar2").addEventListener("click",function(event){
    var valor=prompt("Informe o valor:")
    depositar2(conta2, Number(valor));
    carregarSaldo2();
});

