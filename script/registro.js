let enviarRegistro;
let conta;

enviarRegistro = document.getElementById("enviarRegistro");
enviarRegistro.addEventListener("click", function(event){
    salvarDadosDoRegistro();
    registro(localStorage.getItem("nome"), localStorage.getItem("senha"), localStorage.getItem("saldo"));
});

let contaTeste = new Conta(localStorage.getItem("nome"), localStorage.getItem("senha"), localStorage.getItem("saldo"))
//console.log(contaTeste);

function registro(nomeRegistro,senhaRegistro,saldoRegistro){
    conta = new Conta(nomeRegistro,senhaRegistro,saldoRegistro);
    console.log(conta);
}

console.log(conta);

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