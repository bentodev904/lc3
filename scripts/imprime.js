try{
    console.log("ola");
    var x = 1;
    var z = 1;
    y = x + z;
    console.log(y);
    if(y=='z'){
        console.log(y);
    }else if(true){
        console.log(x);
    }
} catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
}
