const numerosPerfeitos = [];

let numero = 2; 
while (numerosPerfeitos.length < 4) {
    let somaDivisores = 0;
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            somaDivisores += i;
        }
    }
    if (somaDivisores === numero) {
        numerosPerfeitos.push(numero);
    }
    numero++;
}

console.log("Os 4 primeiros números perfeitos são:", numerosPerfeitos);