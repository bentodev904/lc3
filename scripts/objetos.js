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
console.log(Pessoa.especificar());
const novapessoa = Object.create(Pessoa);
novapessoa.nome = "jose";