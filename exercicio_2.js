const vetor = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

let soma = 0;

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}

console.log("A soma dos elementos é:", soma);
