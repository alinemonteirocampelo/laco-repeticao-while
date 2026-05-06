let totalDaCompra = 0;
let valorProduto = prompt("Digite o valor do produto (ou 0 para encerrar):");


valorProduto = Number(valorProduto);

while (valorProduto !== 0) {
    
    totalDaCompra = totalDaCompra + valorProduto;
    
    
    valorProduto = prompt("Digite o próximo valor (ou 0 para ver o total):");
    valorProduto = Number(valorProduto);
}

alert("O valor total da sua compra é: R$ " + totalDaCompra);
