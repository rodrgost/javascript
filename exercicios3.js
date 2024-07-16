//  https://cursos.alura.com.br/course/javascript-utilizando-tipos-variaveis-funcoes/task/148918
let saldo = 12;
let deposito = 1;
let saque = 12;

//  1
console.log('1)---------------');
console.log(saldo);

if (saque > saldo){
    console.log('Saldo insuficiente');
} else {
    console.log(`saque de ${saque} efetuado`);
    saldo -= saque;
}

console.log(saldo);

if (deposito > 0) {
    console.log(`deposito de ${deposito} efetuado`);
    saldo += deposito;
}

console.log(saldo);

console.log('2)---------------');
const valor = 501;

console.log(valor % 2 === 0 ? 'par' : 'impar');

console.log('3)---------------');

let logado = true;
let temPermissaoAdm = false;

if (logado && temPermissaoAdm){
    console.log('logado e tem permissao');
} else if (logado || temPermissaoAdm) { 
   console.log(`logado = ${logado} e Possui Permissao ADM = ${temPermissaoAdm}`);
} else {
    console.log('nao logado e sem permissao adm');
}

console.log('4)---------------');

//bem idiota essa

console.log('5)---------------');
//bem simples