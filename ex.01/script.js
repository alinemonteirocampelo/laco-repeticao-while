let numero = 
prompt("Digite um número positivo:");

// Enquanto o número for menor que zero, ele entra no "loop"
while (numero < 0) {
    alert("Erro! Você digitou um número negativo.");
    numero = prompt("Por favor, digite um número POSITIVO:");
}
alert("Parabéns! Você digitou o número: " + numero);