const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nomes = [];

function pedirNome(indice) {
    rl.question(`Digite o ${indice + 1}º nome: `, function(nome) {
        nomes.push(nome);

        if (indice < 4) {
            pedirNome(indice + 1);
        } else {
            console.log("Nomes digitados:", nomes.join(", "));
            console.log("Nomes em ordem inversa:", nomes.reverse().join(", "));
            rl.close();
        }
    });
}

pedirNome(0);