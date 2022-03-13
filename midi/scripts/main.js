const teclas = document.querySelectorAll('.tecla');
teclas.forEach(tecla => {
    tecla.addEventListener('click', () => tocaSom(getAudioId(tecla)));
    tecla.addEventListener('keydown', deixarVermelho);
    tecla.addEventListener('keyup', deixarVermelho);
});

function tocaSom(audioId) {
    document.querySelector(audioId).play();
}

function getAudioId(tecla) {
    const instrumento = tecla.classList[1];
    return `#som_${instrumento}`;
}


function deixarVermelho(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.target.classList.toggle('ativa');
    }
}