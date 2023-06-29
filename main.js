const form = document.getElementById('form-avaliacao');

function validarNotas(suaNota, mediaNecessaria) {
    if (mediaNecessaria > suaNota) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const suaNotaElement = document.getElementById("sua-nota");
    const mediaNecessariaElement = document.getElementById("media-necessaria");

    const suaNota = parseFloat(suaNotaElement.value);
    const mediaNecessaria = parseFloat(mediaNecessariaElement.value);
    const containerMensagemResultado = document.querySelector('.message-result')

    if (validarNotas(suaNota, mediaNecessaria)) {
        containerMensagemResultado.innerHTML = `Sua nota <b>${suaNota}</b> é menor que a média <b>${mediaNecessaria}</b>. Você está Reprovado!`;
        containerMensagemResultado.style.display = 'block';

        suaNotaElement.value = '';
        mediaNecessariaElement.value = '';

    } else {
        containerMensagemResultado.innerHTML = `Sua nota <b>${suaNota}</b> é maior que a média <b>${mediaNecessaria}</b>. Você está Aprovado!`;
        containerMensagemResultado.style.display = 'block';

        suaNotaElement.value = '';
        mediaNecessariaElement.value = '';
    }
})

console.log(form);