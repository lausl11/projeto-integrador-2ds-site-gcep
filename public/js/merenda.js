

const diaAtual = new Date().getDay(); //so funciona quando for de segunda a Ssexta, fora é underfine

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
else if (diaAtual === 5) {
    cardHoje = document.getElementById('sexta');
}

const tagHoje = document.createElement('span'); //<span> </span>

tagHoje.textContent = 'Hoje'; //<span>hoje</span>

tagHoje.classList.add('tag-hoje');//<span class="tag-hoje">hoje</span>

if (cardHoje) {

    const header = cardHoje.querySelector('.dia-header');

    header.appendChild(tagHoje);

}