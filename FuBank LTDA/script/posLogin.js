var valorSaldo = document.getElementById("saldo");

document.getElementById("botoesUser").addEventListener("click", function(event){
    if(valorSaldo.innerHTML == "R$***,**"){
        carregarSaldo();
        document.getElementById("olho").src = "img/Olho.png";
    } else {
        esconderSaldo();
        document.getElementById("olho").src = "img/OlhoFechado.png";
    }
});

function esconderSaldo(){
    document.getElementById("saldo").innerHTML = "R$***,**";
}

function carregarSaldo(){
    document.getElementById("saldo").innerHTML = "R$"+getSaldo(contaUm);
}

function carregarInfoDoUsuario(){
    document.getElementById("nomeCliente").innerHTML = "Olá, " + getNome(contaUm);
    carregarSaldo();
}

function carregarTelaDeUsuario(){
    document.getElementById("central").style.height = '800px';
    document.getElementById("central").style.width = '600px';
    document.getElementById("central").style.backgroundColor = '#ffffff';
    document.getElementById("areaUser").style.display="block";
    document.getElementById("infoUser").style.display="block";
    document.getElementById("interecoesEssenciais").style.display="block";
    document.getElementById("historico").style.display="block";
    document.getElementById("porEnquantoNada").style.display="block";
    carregarInfoDoUsuario();
}