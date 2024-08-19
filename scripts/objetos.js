const Pessoa ={
    nome: "Marcelo",
    nomemeio: "Tomporoski",
    nomeultimo: "Perez",
    dtnascimento: "25/10/1980",
    cpf: "00000000000",
    sexo: "masculino",
    nomecompleto: function(){
        return(this.nome+""+this.nomemeio+""+this.nomeultimo);
    },especificar: function(){
        return "A pessoa chama: "+this.nomecompleto()+" Nascida em: "+this.dtnascimento+" Possui o CPF: "+this.cpf+" Com o sexo: "+this.sexo;
    }
};
function objeto(nome, nomemeio, nomeultimo, nomecompleto, dtnascimento, cpf, sexo){
    const novapessoa = Object.create(Pessoa);
    novapessoa.nome = nome;
    novapessoa.nomemeio = nomemeio;
    novapessoa.nomeultimo = nomeultimo;
    novapessoa.nomecompleto = nomecompleto;
    novapessoa.dtnascimento = dtnascimento;
    novapessoa.cpf = cpf;
    novapessoa.sexo = sexo;
    return novapessoa
}
