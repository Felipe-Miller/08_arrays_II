function unirVetores(vetor1, vetor2) {
    const vetorUniao = [...vetor1, ...vetor2];
    return vetorUniao;
}

const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetor2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const vetorUniao = unirVetores(vetor1, vetor2);

console.log("Vetor de união:", vetorUniao);