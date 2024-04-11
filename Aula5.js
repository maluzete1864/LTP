class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
saudacao() {
    console.log (`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}
}

//atividade1

maiorIdade() {
    if(this.idade > 18) {
        console.log(`é maior de idade tem ${this.idade}`);
    } else
    {
        console.log(`é menor de idade tem ${this.idade}`);
    }
}
