for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// Saída: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// Saída: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// Saída: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for (let i = 0; i <= 100; i++) {
    if (i === 50) {
        break;
    }
    console.log(i);
}
// Saída: 0, 1, 2, ... , 48, 49

for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        continue;
    }
    console.log(i);
}
// Saída: 0, 1, 2, ..., 12, 14, 15, ..., 20

let nomes = ['Alice', 'Bruno', 'Carla', 'Daniel'];

for (let nome of nomes) {
    console.log(nome);
}
// Saída:
// Alice
// Bruno
// Carla
// Daniel

