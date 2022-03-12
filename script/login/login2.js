function alerta2(mensagem){
    let alerta2 = document.getElementById("alerta2");
    alerta2.style.display="block";
    alerta2.innerHTML = mensagem;
    return alerta2.value;
}

function validadorDeUsuario2(conta, nomeDeEntrada){
    if(conta.nome == nomeDeEntrada)
        return true;
    else
        return false;    
} 

function validadorDeSenha2(conta, senhaDeEntrada){
    if(conta.senha == senhaDeEntrada)
        return true;
    else
        return false;    
}

function removerLogin2(){
    document.getElementById("logar2").style.display="none";
    document.getElementById("user2").style.display="none";
    document.getElementById("senha2").style.display="none";
    document.getElementById("bemvindo2").style.display="none";
    document.getElementById("alerta2").style.display="none";
    document.getElementById("registrar2").style.display="none";
    document.getElementById("areaDeDados2").style.display="none";
}

function logar2(){
    removerLogin2();
    carregarTelaDeUsuario2();
}

function validacao2(){
    const user2 = document.getElementById("user2").value;
    const senha2 = document.getElementById("senha2").value;

    if(user2.length > 0 && senha2.length > 0){
        if(validadorDeUsuario2(conta2, user2) && validadorDeSenha2(conta2, senha2)){
            logar2();
        } else {
            alerta2("Os dados abaixo estão inválidos.");
        }
    } else {
        alerta2("Preencha os campos abaixo!");
    }
}