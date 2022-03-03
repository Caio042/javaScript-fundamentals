const destinoDeViagens = new Array(
    `Paris`,
    `Salvador`,
    `Chile`
);

for(let i = 0; i < destinoDeViagens.length; i++) {
    console.log(destinoDeViagens[i]);
}

const destinoPreferivel = `Salvador`;

for(let i = 0; i < destinoDeViagens.length; i++) {
    if (destinoDeViagens[i] == destinoPreferivel) {
        console.log(destinoDeViagens[i]);
        break
    }
}