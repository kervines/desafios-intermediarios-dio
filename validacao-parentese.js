/*
Desafio
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

Entrada
Uma string é considerada válida se:

Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída
A saída corresponde a um valor Booleano como no exemplo abaixo:
*/

let n = gets();
function isValid(s) {
  if (s[0] === "(" && s[1] === ")") {
    return true;
  } else if (s[0] === "[" && s[1] === "]") {
    return true;
  } else if (s[0] === "{" && s[1] === "}") {
    return true;
  } else {
    return false;
  }
}

print(isValid(n));
