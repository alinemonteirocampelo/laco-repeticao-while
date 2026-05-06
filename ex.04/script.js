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