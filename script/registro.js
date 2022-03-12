let enviarRegistro;

enviarRegistro = document.getElementById("enviarRegistro");
enviarRegistro.addEventListener("click", function(event){
    var nome = document.getElementById("registrarNome").value;
    var senha = document.getElementById("registrarSenha").value;
    var saldo = document.getElementById("registrarSaldo").value;
    
    if(nome.length > 0 && senha.length > 0 && saldo.length > 0){
        salvarDadosDoRegistro();
        document.location.reload(true);
    } else {
        alerta("Você precisa preencher todos os campos!");
    }
});

conta = new Conta(localStorage.getItem("nome"), localStorage.getItem("senha"), Number(localStorage.getItem("saldo")));

function salvarDadosDoRegistro(){
    localStorage.setItem("nome", document.getElementById("registrarNome").value);
    localStorage.setItem("senha", document.getElementById("registrarSenha").value);
    localStorage.setItem("saldo", document.getElementById("registrarSaldo").value);
}

function iniciarTelaDeRegistro(){
    removerLogin();
    carregarTelaDeRegistro();
    document.getElementById("h1Registro").innerHTML = "Registrar";
}

function carregarTelaDeRegistro(){
    document.getElementById("central").style.height = '600px';
    document.getElementById("central").style.width = '600px';
    document.getElementById("central").style.backgroundColor = '#ffffff';
    document.getElementById("areaRegistro").style.display="block";
}