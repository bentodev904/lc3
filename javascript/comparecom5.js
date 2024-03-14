function compare(x) {
    if (x === '') {
        alert('O campo está vazio!');
        return false;
    }
    if (x < 5) {
        if (x < 0) {
            alert(x+" é menor que 5 e negativo");
        } else {
            alert(x+" é menor que 5 e positivo");
        }

    } else if (x == 5) {
        alert(x+" é igual a 5");
    } else {
        alert(x+" é maior que 5");
    }
}