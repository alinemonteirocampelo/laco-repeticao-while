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