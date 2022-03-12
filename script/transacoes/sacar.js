function sacar(conta, valorSacar){
    conta.saldo -= valorSacar;
    localStorage.setItem("saldo", conta.saldo);
}

document.getElementById("botaoSacar").addEventListener("click", function(event){
    var valor = prompt("Informe o valor:");
    sacar(conta, Number(valor));
    carregarSaldo();
})
