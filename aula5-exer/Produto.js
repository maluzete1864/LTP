class Produto{
    constructor( nome, preco, quantidade) {
        this.nome = nome;
        this.preço = preco;
        this.quantidade = quantidade;
    }
// acrescentar mensagens/legendas
//a
    valorTotal() {
        console.log(`${this.preco * this.quantidade}`);
    }

//b
    atualizeQuantidade() {
        console.log(`${this.quantidade * 20}`);
    }
//c
    verificarDisponibilidade() {
        console.log(`${this.quantidade > 0}`);
    }
//d não concluido
    aplicarDesconto() {
        console.log(`${this.preco - 5}`);
    }
//e não concluido
calcularPrecoTotal() {
    console.log(`${this.preco - 5}`);
}
//f
verificarPromocao() {
    console.log(`${this.preco * this.quantidade}`);
}
//g
removerEstoque() {
    console.log(`${this.preco * this.quantidade}`);
}
//h
aumentarPrecoPercentual() {
    console.log(`${this.preco * this.quantidade}`);
}
//i
vcalcularPrecoUnitario() {
    console.log(`${this.preco * this.quantidade}`);
}

}

let produtoum = new Produto ("gloss", "10", "10");

