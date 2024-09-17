const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
};

console.log(carro.modelo); // Imprime: Corolla

carro.cor = 'Azul'; // Adicionando a propriedade 'cor'
carro.ano = 2022;   // Modificando a propriedade 'ano'

console.log(carro);  // Imprime o objeto modificado

const calculadora = {
    soma: function(a, b) {
        return a + b;
    }
};

console.log(calculadora.soma(5, 3)); // Imprime: 8

for (let propriedade in carro) {
    console.log(propriedade + ": " + carro[propriedade]);
}
// Itera sobre as propriedades do objeto carro e imprime cada uma

const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien'
};

const outroLivro = livro;  // Referência ao objeto 'livro'
outroLivro.titulo = 'O Hobbit';  // Modificando a propriedade 'titulo'

console.log(livro.titulo);  // Imprime: O Hobbit (O objeto original foi alterado)

const exemploObjeto = {
    nome: 'João',
    idade: 25,
    profissao: 'Desenvolvedor'
};

console.log(Object.keys(exemploObjeto));  // Imprime: [ 'nome', 'idade', 'profissao' ]
console.log(Object.values(exemploObjeto)); // Imprime: [ 'João', 25, 'Desenvolvedor' ]
