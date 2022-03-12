var valorSaldo2 = document.getElementById("saldo2");

document.getElementById("botoesUser2").addEventListener("click", function(event){
    if(valorSaldo2.innerHTML == "R$***,**"){
        carregarSaldo2();
        document.getElementById("olho2").src = "img/Olho.png";
    } else {
        esconderSaldo2();
        document.getElementById("olho2").src = "img/OlhoFechado.png";
    }
});

function esconderSaldo2(){
    document.getElementById("saldo2").innerHTML = "R$***,**";
}

function carregarSaldo2(){
    document.getElementById("saldo2").innerHTML = "R$"+getSaldo(conta2);
}

function carregarInfoDoUsuario2(){
    document.getElementById("nomeCliente2").innerHTML = "Olá, " + getNome(conta2);
    carregarSaldo2();
}

function carregarTelaDeUsuario2(){
    document.getElementById("central2").style.height = '600px';
    document.getElementById("central2").style.width = '600px';
    document.getElementById("central2").style.backgroundColor = '#ffffff';
    document.getElementById("central2").style.left="57.2%";
    document.getElementById("areaUser2").style.display="block";
    document.getElementById("infoUser2").style.display="block";
    document.getElementById("interecoesEssenciais2").style.display="block";
    document.getElementById("historico2").style.display="block";
    document.getElementById("porEnquantoNada2").style.display="block";
    carregarInfoDoUsuario2();
}

function removerTelaDeUsuario2(){
    document.getElementById("areaUser2").style.display="none";
    document.getElementById("infoUser2").style.display="none";
    document.getElementById("interecoesEssenciais2").style.display="none";
    document.getElementById("historico2").style.display="none";
    document.getElementById("porEnquantoNada2").style.display="none";
}