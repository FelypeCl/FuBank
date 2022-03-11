function alerta(mensagem){
    let alerta = document.getElementById("alerta");
    alerta.style.display="block";
    alerta.innerHTML = mensagem;
    return alerta.value;
}

function validadorDeUsuario(conta, nomeDeEntrada){
    if(conta.nome == nomeDeEntrada)
        return true;
    else
        return false;    
}

function validadorDeSenha(conta, senhaDeEntrada){
    if(conta.senha == senhaDeEntrada)
        return true;
    else
        return false;    
}

function removerLogin(){
    document.getElementById("logar").style.display="none";
    document.getElementById("user").style.display="none";
    document.getElementById("senha").style.display="none";
    document.getElementById("bemvindo").style.display="none";
    document.getElementById("alerta").style.display="none";
    document.getElementById("registrar").style.display="none";
    document.getElementById("areaDeDados").style.display="none";
}

function logar(){
    removerLogin();
    carregarTelaDeUsuario();
}

function validacao(){
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    if(user.length > 0 && senha.length > 0){
        if(validadorDeUsuario(conta, user) && validadorDeSenha(conta, senha)){
            logar();
        } else {
            alerta("Os dados abaixo estão inválidos.");
        }
    } else {
        alerta("Preencha os campos abaixo!");
    }
}