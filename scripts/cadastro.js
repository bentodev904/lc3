try{
    var cadastro = [];
    //define cadastro como um vetor vazio
    function cad(nome, telefone) {
        try{
        cadastro.push({ nome: nome, nomeultimo:nomeultimo, telefone: telefone });
        //coloca as informaçoes dos inputs nos espaços de nome e telefone
    }catch(error) {
        console.log("O nome do erro é: ${erro.name}\n");
        console.log("A mensagem do erro é: ${erro.message}\n");
        console.log("A stack do erro é: ${erro.stack}\n");
    }}
    function escreveCadastro() {
        x = document.getElementById("mostrar")
        //coloca o "espaco" no index como uma variavel
        for (var cont in cadastro) {
            x.innerHTML += `Nome: ${cadastro[cont].nome} | ultimonome: ${cadastro[cont].ultimonome} | Telefone: ${cadastro[cont].telefone} <br>`
            //para cada cont(variavel, creio que começe em 0) dentro de cadastro(vetor que definimos acima), coloca no html (escreve) "..." chama o que deve ser mostrado, na posiçao [cont]
        }
        cadastro = [];
        //define cadastro como vazio, um toque que fiz para que se a função for chamada duas vezes, sem dois registros, escreve apenas uma vez (uma vez por cadastramento)
    }
    function limpar() {
        x = document.getElementById("mostrar")
        x.innerHTML = ''
        //so esvazia a div quando chamada a function
    }
}catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
}