class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
saudacao() {
    console.log (`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}

}
let pessoa1 = new Pessoa("João", 30);
let pessoa2 = new Pessoa("Maria", 25);

pessoa1.saudacao();
pessoa1.saudacao();
