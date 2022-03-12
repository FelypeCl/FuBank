let enviarRegistro2;

enviarRegistro2 = document.getElementById("enviarRegistro2");
enviarRegistro2.addEventListener("click", function(event){
    var nome = document.getElementById("registrarNome2").value;
    var senha = document.getElementById("registrarSenha2").value;
    var saldo = document.getElementById("registrarSaldo2").value;
    
    if(nome.length > 0 && senha.length > 0 && saldo.length > 0){
        salvarDadosDoRegistro2();
        document.location.reload(true);
    } else {
        alerta("Você precisa preencher todos os campos!");
    }
});

conta2 = new Conta(localStorage.getItem("nome2"), localStorage.getItem("senha2"), Number(localStorage.getItem("saldo2")));

function salvarDadosDoRegistro2(){
    localStorage.setItem("nome2", document.getElementById("registrarNome2").value);
    localStorage.setItem("senha2", document.getElementById("registrarSenha2").value);
    localStorage.setItem("saldo2", document.getElementById("registrarSaldo2").value);
}

function carregarTelaDeRegistro2(){
    document.getElementById("central2").style.height = '600px';
    document.getElementById("central2").style.width = '600px';
    document.getElementById("central2").style.backgroundColor = '#ffffff';
    document.getElementById("central2").style.left="57.2%";
    document.getElementById("areaRegistro2").style.display="block";
}

function iniciarTelaDeRegistro2(){
    removerLogin2();
    carregarTelaDeRegistro2();
    document.getElementById("h1Registro2").innerHTML = "Registrar";
}