var pessoacadastro = {};
try{
    function cadpessoa(formParametros) {
    pessoacadastro[formParametros.nome.value + formParametros.cpf.value.substring(0, 3)] = {
        nome: formParametros.nome.value,
        nomemeio: formParametros.nomemeio.value,
        nomeultimo: formParametros.nomeultimo.value,
        dtnascimento: formParametros.dtnascimento.value,
        cpf: formParametros.cpf.value,
        sexo: formParametros.sexo.value,
        nomecompleto: function () {
            return (this.nome + " " + this.nomemeio + " " + this.nomeultimo);
        },
        especificar: function () {
            return `O Nome cadastrado é: ${this.nomecompleto()},
            nascido(a) em: ${this.dtnascimento},
            possui o cpf: ${this.cpf}, 
            com o sexo: ${this.sexo}`;
        },
    }
    
    return false;
}}catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
}
try{
function escevecadastro() {
    lista = '';    
    for (let i = 0; i < Object.keys(pessoacadastro).length; i++) {
        lista+= pessoacadastro[Object.keys(pessoacadastro)[i]].especificar()+"<br />";
    }
    document.getElementById("pessoalista").innerHTML = lista;

    return false;
}}catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
}
function del() {
    x = this.pessoacadastro
    x.innerHTML = ''
    //so esvazia a div quando chamada a function
}