//https://cursos.alura.com.br/course/javascript-utilizando-tipos-variaveis-funcoes/task/148905
//1
let frase = 'esta é uma frase de merda';

console.log(frase);
console.log(frase.length);
console.log(frase.toUpperCase());

//2
let valorUnd;
let valorNull = null;
console.log(valorUnd);
console.log(valorNull);

//3
let numero = 3;
let str = 'meu nome';
let boi = true;

console.log('boolean como texto: ' + numero + str + boi);
console.log('boolean como numero: ' + (numero + boi));

//4
console.log();
numero = 4; 
str= 'meu ovo';
console.log(typeof String(numero));
console.log(typeof Number(str));

//5
let str2 = 'é nois mano';
console.log(str.toUpperCase());
console.log(str.split(' ', 1));