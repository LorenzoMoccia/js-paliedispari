"use strict";

const userChoice = prompt("Scegli Pari o Dispari? Digita 'pari' o 'dispari'");

while(userChoice != "pari" || userChoice != "dispari"){
    const userChoice = prompt("Scegli Pari o Dispari? Digita 'pari' o 'dispari'");
}

let userNumber = prompt("Inserisci un numero da 1 a 5");

let num = 0;

function rollDice(num){
    const a = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    return num;
}

console.log(num);