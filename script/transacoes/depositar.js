function depositar(conta,valorDepositar){
    conta.saldo += valorDepositar;
    localStorage.setItem("saldo", conta.saldo);
}

document.getElementById("botaoDepositar").addEventListener("click",function(event){
    var valor=prompt("Informe o valor:")
    depositar(conta, Number(valor));
    carregarSaldo();
});

