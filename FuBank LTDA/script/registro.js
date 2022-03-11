let nomeRegistro, senhaRegistro, saldoRegistro, contaRegistro;

function registro(nomeRegistro,senhaRegistro,saldoRegistro){
    this.nome = nomeRegistro;
    this.senha = senhaRegistro;
    this.saldo = saldoRegistro;
    contaRegistro = new Conta(nomeRegistro,senhaRegistro,saldoRegistro);
    removerLogin();
    carregarTelaDeRegistro();
}

function carregarTelaDeRegistro(){
    document.getElementById("central").style.height = '800px';
    document.getElementById("central").style.width = '600px';
    document.getElementById("central").style.backgroundColor = '#ffffff';
    document.getElementById("areaRegistro").style.display="block";
}

console.log(contaRegistro);