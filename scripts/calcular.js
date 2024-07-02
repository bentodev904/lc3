function maths(x, y) {
  y = document.getElementById("num2").value;
  //define uma variavel para armazenar o segundo input
  if (x === "" || y === "") {
    alert("O campo está vazio!");
    return false;
    //testa se os inputs estão vazios
  }
  soma = Number(x) + Number(y);
  mult = x * y;
  div = x / y;
  //faz os calculos
  result = [
    "Soma = " +
      soma +
      "<br>" +
      "Multiplicacao = " +
      mult +
      "<br>" +
      "Divisao = " +
      div,
      //escreve os resultados, formatando bonitinho
  ];
  document.getElementById("conta").innerHTML = result;
  //manda os resultados para a div "conta" no index
}
