let somaDasNotas = 0;
let quantidadeDeNotas = 0;

let nota = prompt("Digte uma nota (de 0 a 10) ou um número negativo para parar:");

nota = Number(nota);

while (nota >= 0) {
    somaDasNotas = somaDasNotas + nota;
    quantidadeDeNotas = quantidadeDeNotas + 1;

    nota = prompt("Digite a próxima nota (ou um número negativo para sair):");
    nota = Number(nota);
}

if (quantidadeDeNotas > 0) {
    let media = somaDasNotas / quantidadeDeNotas;
    alert("A média das notas é:" + media);
} else {
    alert("Você não digtou nenhuma nota válida.");
}
