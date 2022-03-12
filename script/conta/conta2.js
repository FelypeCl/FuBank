function iniciarTelaDeEditarDados2(){
    removerTelaDeUsuario2();
    iniciarTelaDeRegistro2();
    document.getElementById("h1Registro2").innerHTML = "Editar dados";
}

function iniciarTelaDeDadosPessoais2(){
    removerTelaDeUsuario2();
    document.getElementById("areaDeDados2").style.display="block";
    document.getElementById("mostrarNome2").placeholder= conta2.nome;
    document.getElementById("mostrarSenha2").placeholder= conta2.senha;
    document.getElementById("mostrarSaldo2").placeholder= "R$"+conta2.saldo;
    document.getElementById("voltarPraTelaDeUser2").value = "Voltar para tela inicial";
}