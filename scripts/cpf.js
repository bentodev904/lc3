try{
function tamanhocpf(cpf){
    var x = String(cpf.length);
    //passa o input cpf como string, e seu tamanho para uma variavel x
    if(x != 11){
        document.getElementById('cpfresultado').innerHTML = ("cpf Errado");
        //se o numero de casas do input cpf nao for 11, ou seja esta errado, avisa que esta errado
    } else if(x == 11){
        var dig = parseInt(cpf.substring(8, 9))
        //passa a parte inteira das "casas" 8 e 9 (posicao onde fica o "ddd" dos cpfs) para outra variavel
        switch(dig){
            case 0: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Rio Grande do Sul</b>"); break;
            case 1: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins</b>"); break;
            case 2: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Pará, Amazonas, Acre, Amapá, Rondônia e Roraima</b>"); break;
            case 3: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Ceará, Maranhão e Piauí</b>"); break;
            case 4: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Pernambuco, Rio Grande do Norte, Paraíba e Alagoas</b>"); break;
            case 5: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Bahia e Sergipe</b>"); break;
            case 6: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Minas Gerais</b>"); break;
            case 7: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Rio de Janeiro e Espírito Santo</b>"); break;
            case 8: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>São Paulo</b>"); break;
            case 9: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Paraná e Santa Catarina</b>"); break;
            //testa para cada caso e identifica a origem do cpf
        }
    }
}} catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
}