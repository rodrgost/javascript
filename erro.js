function calculaProduto(a, b = 2, c = 1) {
  return a * b * c;
}

const resultado1 = calculaProduto(3);
const resultado2 = calculaProduto(2, 4);
const resultado3 = calculaProduto(1, 2, 3);
const resultado4 = calculaProduto(2, 3, 20, 20);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);

const retornaNome = (nome) => {
  return nome.split('').reverse().join('');
}

let reto = retornaNome('rodrigo');

console.log (reto);