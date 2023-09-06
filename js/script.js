const name = prompt('Inserisci il tuo nome');
const lastname = prompt('Inserisci il tuo cognome');
const colorFavorite = prompt('Inserisci il tuo colore preferito');

const message = name + lastname + colorFavorite + '23';

document.getElementById('password').innerHTML = message;