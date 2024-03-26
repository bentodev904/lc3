function maths(x, y) {
  y = document.getElementById("num2").value;
  if (x === "" || y === "") {
    alert("O campo está vazio!");
    return false;
  }
  soma = parseFloat(x) + parseFloat(y);
  mult = x * y;
  div = x / y;
  result = [
    "Soma = " +
      soma +
      "<br>" +
      "Multiplicacao = " +
      mult +
      "<br>" +
      "Divisao = " +
      div,
  ];
  document.getElementById("conta").innerHTML = result;
}
