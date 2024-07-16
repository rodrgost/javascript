//https://cursos.alura.com.br/course/javascript-utilizando-tipos-variaveis-funcoes/task/148925

//1
const boasVindas = (nome)  => {
    return `Boas vindas ${nome}`;
}

console.log(boasVindas('paulo'));

//2
function eMaiorDeIdade(idade){
    if (idade >= 18){
        return true;
    }else{
        return false;
    }
}

if (eMaiorDeIdade(11)){
    console.log('é de maior');
}
else{
    console.log('nao é de maior');
}

// 3 

const nome = 'rodrigo';
let arrNome = nome.split('');
console.log(nome);
console.log(arrNome);
console.log(arrNome.reverse());
console.log(arrNome.join(''));