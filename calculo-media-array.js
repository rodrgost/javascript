const notas = [10, 6.5, 8, 7.5]
let media = 0;

notas.forEach(element => {
    media += element;
});

media = media / notas.length;

console.log(`${notas.length}`);
console.log(`media igual a ${media}`);

///////

notas.pop(2);

notas.forEach(element => {
    media += element;
});

media = media / notas.length;

console.log(`${notas.length}`);
console.log(`media igual a ${media}`);