const destinoDeViagens = new Array( //Declaração de array
    `Paris`,
    `Salvador`,
    `Chile`
);

destinoDeViagens.push(`China`);//adicionar elemento ao array
const primeiroDestino = destinoDeViagens.splice(0,1); //Retorna e deleta elemento da lista (posição, quantidade a ser removido)
console.log(primeiroDestino);

console.log(destinoDeViagens);