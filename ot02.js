let animais = [];
animais.push('cachorro');
animais.push('gato');
animais.push('papagaio');

console.log(animais); // ['cachorro', 'gato', 'papagaio']

animais.shift();

console.log(animais); // ['gato', 'papagaio']

animais.unshift('elefante');
animais.unshift('leão');

console.log(animais); // ['leão', 'elefante', 'gato', 'papagaio']

animais[1] = 'girafa';

console.log(animais); // ['leão', 'girafa', 'gato', 'papagaio']

let frutas = ['maçã', 'banana', 'laranja', 'uva'];

console.log(frutas.length); // 4

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída:
// maçã
// banana
// laranja
// uva

