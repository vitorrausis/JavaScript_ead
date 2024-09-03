function classificarIdade(idade) {
    if (idade < 13) {
        return 'criança';
    } else if (idade >= 13 && idade <= 17) {
        return 'adolescente';
    } else if (idade >= 18 && idade <= 64) {
        return 'adulto';
    } else {
        return 'idoso';
    }
}

console.log(classificarIdade(10)); // 'criança'
console.log(classificarIdade(15)); // 'adolescente'
console.log(classificarIdade(30)); // 'adulto'
console.log(classificarIdade(70)); // 'idoso'

function jogoDeAdivinhacao(numeroEscolhido) {
    const numeroCorreto = Math.floor(Math.random() * 5) + 1;

    switch (numeroEscolhido) {
        case numeroCorreto:
            console.log('Parabéns! Você acertou.');
            break;
        default:
            console.log(`Você errou! O número correto era ${numeroCorreto}.`);
            break;
    }
}

jogoDeAdivinhacao(3); // Teste com o número 3 (o número correto varia)

function avaliarNota(nota) {
    let resultado;

    switch (true) {
        case (nota < 6):
            resultado = 'Reprovado';
            break;
        case (nota >= 6 && nota <= 7):
            resultado = 'Recuperação';
            break;
        case (nota > 7):
            resultado = 'Aprovado';
            break;
        default:
            resultado = 'Nota inválida';
            break;
    }

    return resultado;
}

console.log(avaliarNota(5)); // 'Reprovado'
console.log(avaliarNota(6.5)); // 'Recuperação'
console.log(avaliarNota(8)); // 'Aprovado'

