# Laço Repetição While
## Atividades usando  programas em javaScript 

### 1) Peça para o usuário digitar um número positivo. Caso ele digite um número negativo, continue pedindo até que ele digite um valor válido. 🔢

~~~~
let numero = 
prompt("Digite um número positivo:");

// Enquanto o número for menor que zero, ele entra no "loop"
while (numero < 0) {
    alert("Erro! Você digitou um número negativo.");
    numero = prompt("Por favor, digite um número POSITIVO:");
}
alert("Parabéns! Você digitou o número: " + numero);
~~~~
---
### 2) O usuário pode digitar notas (de 0 a 10) indefinidamente. O programa só deve parar quando ele digitar um número negativo. Depois, deve exibir a média das notas. 📈]

~~~~
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
~~~~
---

### 3) Peça para o usuário inserir valores de compras. Quando ele digitar 0, o programa exibe o total da compra. 🛍️

~~~
let totalDaCompra = 0;
let valorProduto = prompt("Digite o valor do produto (ou 0 para encerrar):");


valorProduto = Number(valorProduto);

while (valorProduto !== 0) {
    
    totalDaCompra = totalDaCompra + valorProduto;
    
    
    valorProduto = prompt("Digite o próximo valor (ou 0 para ver o total):");
    valorProduto = Number(valorProduto);
}

alert("O valor total da sua compra é: R$ " + totalDaCompra);
~~~
---
### 4) O programa pede o primeiro nome e o sobrenome separadamente. Se o usuário deixar um deles em branco, o programa pede novamente até ser preenchido corretamente. 🖊️

~~~
let nome = prompt("Digite o seu primeiro nome:");

// Enquanto o nome for igual a vazio, ele pede novamente
while (nome == "") {
    alert("O nome não pode ficar em branco!");
    nome = prompt("Por favor, digite o seu nome:");
}

let sobrenome = prompt("Digite o seu sobrenome:");

while (sobrenome == "") {
    alert("O sobrenome não pode ficar em branco!");
    sobrenome = prompt("Por favor, digite o seu sobrenome:");
}

alert("Olá, " + nome + " " + sobrenome + "! Cadastro realizado.");
~~~
---
### 5) Um usuário deseja sacar um valor. O programa deve verificar se há saldo suficiente (simule um valor inicial armazenando-o em uma variável). Se não houver, deve pedir um novo valor até o saque ser possível e encerrar quando o saldo for 0 ou negativo. 💵

~~~~
let saldoDisponivel = 500;

alert("Bem-vindo ao Banco! Seu saldo atual é: R$ " + saldoDisponivel);

while (saldoDisponivel > 0) {
    
    let valorSaque = prompt("Quanto deseja sacar? (Saldo atual: R$ " + saldoDisponivel + ")");
    valorSaque = Number(valorSaque);

    
    if (valorSaque <= saldoDisponivel) {
        // Se for possível, subtraímos do saldo
        saldoDisponivel = saldoDisponivel - valorSaque;
        alert("Saque realizado com sucesso!");
    } else {
        // Se o saque for maior que o saldo, avisamos o erro
        alert("Saldo insuficiente! Você tentou sacar R$ " + valorSaque + ", mas só tem R$ " + saldoDisponivel);
    }
    
    // O laço volta para o topo e verifica: "O saldo ainda é maior que 0?"
}

alert("Seu saldo acabou. Encerrando o programa.");
