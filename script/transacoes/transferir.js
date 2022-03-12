function transferir(contaDeRetirada,ContaRecebedora,valorDaTransferencia){
    if(contaDeRetirada.saldo < valorDaTransferencia)
        return;
    contaDeRetirada.saldo -= valorDaTransferencia;
    ContaRecebedora.saldo += valorDaTransferencia;
    localStorage.setItem("saldo", contaDeRetirada.saldo);
    localStorage.setItem("saldo2", ContaRecebedora.saldo);
}

document.getElementById("botaoTransferir").addEventListener("click", function(event){
    transferir(conta,conta2,350);
    carregarSaldo();
    carregarSaldo2();
});

document.getElementById("botaoTransferir2").addEventListener("click", function(event){
    transferir(conta2,conta,350);
    carregarSaldo();
    carregarSaldo2();
});