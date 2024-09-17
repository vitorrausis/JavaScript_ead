const livros = new Map();

livros.set('O Senhor dos Anéis', 'J.R.R. Tolkien');
livros.set('1984', 'George Orwell');
livros.set('Dom Quixote', 'Miguel de Cervantes');

console.log(livros); // Imprime o Map com três pares chave-valor

const autor1984 = livros.get('1984');
console.log(autor1984); // Imprime: George Orwell

for (let [titulo, autor] of livros) {
    console.log(`Título: ${titulo}, Autor: ${autor}`);
}
// Itera sobre todos os pares chave-valor no Map e os imprime

console.log(livros.size);  // Imprime o número de livros: 3

livros.delete('Dom Quixote');  // Remove o livro 'Dom Quixote'

console.log(livros.has('Dom Quixote'));  // Verifica se 'Dom Quixote' ainda está no Map: false
console.log(livros.size);  // Imprime o número de livros após a remoção: 2


const colecao = new Map();

const obj = { tipo: 'objeto' };
const num = 42;
const str = 'string chave';

colecao.set(str, 'valor associado à string');
colecao.set(num, 'valor associado ao número');
colecao.set(obj, 'valor associado ao objeto');

console.log(colecao);
// Imprime o Map contendo diferentes tipos de chaves
