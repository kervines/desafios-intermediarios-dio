/*Desafio  
Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

Entrada
A entrada consiste em um número inteiro n, representando o valor total. 

Saída
A saída consiste em retornar o menor número de números quadrados perfeitos. */

let n = parseInt(gets());

function minSquares(n) {
  var min = n;
  for (var i = 1; i * i <= n; i++) {
    var temp = 1 + minSquares(n - i * i);
    if (temp < min) {
      min = temp;
    }
  }
  return min;
}

console.log(minSquares(n));
