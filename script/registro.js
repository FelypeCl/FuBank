let enviarRegistro;

enviarRegistro = document.getElementById("enviarRegistro");
enviarRegistro.addEventListener("click", function(event){
    salvarDadosDoRegistro();
    document.location.reload(true);
});

conta = new Conta(localStorage.getItem("nome"), localStorage.getItem("senha"), localStorage.getItem("saldo"));

function salvarDadosDoRegistro(){
    localStorage.setItem("nome", document.getElementById("registrarNome").value);
    localStorage.setItem("senha", document.getElementById("registrarSenha").value);
    localStorage.setItem("saldo", document.getElementById("registrarSaldo").value);
}

function iniciarTelaDeRegistro(){
    removerLogin();
    carregarTelaDeRegistro();
}

function carregarTelaDeRegistro(){
    document.getElementById("central").style.height = '800px';
    document.getElementById("central").style.width = '600px';
    document.getElementById("central").style.backgroundColor = '#ffffff';
    document.getElementById("areaRegistro").style.display="block";
}