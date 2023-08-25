const vetor = [3, 8, 12, 5, 18, 7, 24, 10, 15, 6, 9, 22, 13, 16, 2];

console.log("Valores pares:");
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        console.log(vetor[i]);
    }
}