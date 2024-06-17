var cadastro = [];
function cad(nome, telefone) {
    cadastro.push({ nome: nome, telefone: telefone });
}
function escreveCadastro() {
    x = document.getElementById("mostrar")
    for (var cont in cadastro) {
        x.innerHTML += `Nome: ${cadastro[cont].nome} | Telefone: ${cadastro[cont].telefone} <br>` 
    }
    cadastro = [];
}

AbortController