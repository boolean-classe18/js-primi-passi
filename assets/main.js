/*

3 modi diversi di stampare un "Hello "world

*/
//
// document.writeln('Hello World!');
//
// alert('Hello World!');
//
// (document.getElementById('titolo')).innerHTML = 'Ciao a tutti!';

/*

Differenza tra somma algebrica e concatenazione

*/
//
// var numero1 = 5;
// var numero2 = 3;
// var stringa = '6';
//
// console.log(numero1 + numero2); // 8
// console.log(numero1 + stringa); // 56!

/*

Operazioni algebriche con variabili

*/
// var somma = 4 + 4;
//
// document.writeln('somma = ' + somma);
//
// var sottrazione = somma - 3;
//
// document.writeln('sottrazione = ' + sottrazione);
//
// var divisione = somma / 2;
//
// document.writeln('divisione = ' + divisione);
//
// var moltiplicazione = sottrazione * 2;
//
// document.writeln('moltiplicazione = ' + moltiplicazione);


/*

Salutiamo l'utente e chiediamo quanti anni ha, quindi stampiamo l'anno di nascita

*/
// chiedo all'utente il suo nome
var nome_utente = prompt('Come ti chiami?');
// recupero il contenuto pre-esistente nel tag h1
var testo_precente = document.getElementById('saluto').innerHTML;
// inserisco nel tag h1 il saluto con il testo pre-esistente e il nome dell'utente
document.getElementById('saluto').innerHTML = testo_precente + nome_utente + '!';

// recupero la data corrente dal sistema
var data_corrente = new Date();
// recupero l'anno corrente a partire dalla data corrente
var anno_corrente = data_corrente.getFullYear();
console.log('anno corrente: ' + anno_corrente);

// chiedo all'utente quanti anni ha
var anni_utente = prompt('Quanti anni hai?');
console.log("anni inseriti dall'utente: " + anni_utente);

// calcolo la differenza tra anno corrente e età utente
var anno_nascita = anno_corrente - anni_utente;

console.log("anno di nascita: " + anno_nascita);
// visualizzo l'anno di nascita all'interno del tag span
document.getElementById('anno').innerHTML = anno_nascita;
