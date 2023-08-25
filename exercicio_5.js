function verificaNumeroNoVetor(vetor, numero) {
    return vetor.includes(numero);
}

const vetorExemplo = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const numeroVerificar = 9;

const resultado = verificaNumeroNoVetor(vetorExemplo, numeroVerificar);

console.log(`O número ${numeroVerificar} ${resultado ? "faz" : "não faz"} parte do vetor.`);