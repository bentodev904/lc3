function testname(x) {
  if (x === "") {
    alert("O campo está vazio!");
    return false;
  }
  document.getElementById("insira").innerHTML = "Confirmar?";
  document.getElementById("yes").value = "Sim";
  document.getElementById("no").value = "Não";
  document.getElementById("yes").style =
    "background-color:green;border-radius:3px";
  document.getElementById("no").style =
    "background-color:red;border-radius:3px";
}

function no(x) {
  return false;
}

function yes(x) {
  save = [x];
  document.getElementById("salvar").innerHTML = save;
}
