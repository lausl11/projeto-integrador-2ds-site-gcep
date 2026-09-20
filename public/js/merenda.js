const diaAtual = 1; //so funciona quando for de segunda a quinta, fora é underfine

var cardHoje;

if (diaAtual === 1) {
    cardHoje = document.getElementById('segunda');
}
else if (diaAtual === 2) {
    cardHoje = document.getElementById('terça');
}
else if (diaAtual === 3) {
    cardHoje = document.getElementById('quarta');
}
else if (diaAtual === 4) {
    cardHoje = document.getElementById('quinta');
}

const tagHoje = document.createElement('span');

tagHoje.textContent = 'Hoje';

tagHoje.classList.add('tag-hoje');

if (cardHoje) {

    const header = cardHoje.querySelector('.dia-header');

    header.appendChild(tagHoje);

}