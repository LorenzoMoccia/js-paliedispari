"use strict";

let userChoice = prompt("Scegli Pari o Dispari? Digita 'pari' o 'dispari'");

while(userChoice !== "pari" && userChoice !== "dispari"){
    userChoice = prompt("Scegli Pari o Dispari? Digita 'pari' o 'dispari'");
}

let userNumber = prompt("Inserisci un numero da 1 a 5");

while(userNumber > 5 || userNumber < 1 )
{
    alert("Hai inserito un numero errato! DEVE ESSERE FRA 1 E 5!")
    userNumber = prompt("Inserisci un numero da 1 a 5");
}

//Numero random
let randomNumber = rollDice();

//Somma numero utente e numero Random
let sum = userNumber + randomNumber;

//Assegno ad una variabile il risultato della funzione pari o dispari
let found = checkIfEvenOrOdd(sum);

//Controllo il valore della variabile found e decreto un vincitore
if(found == true && userChoice == "pari"){
    console.log("Ha vinto l'utente! Congratulazioni!")
    console.log("Numero utente:" + userNumber);
    console.log("Numero random:" + randomNumber);
    console.log("Somma dei due numeri:" + sum);
}
else if(found == false && userChoice == "dispari"){
    console.log("Ha vinto l'utente! Congratulazioni!")
    console.log("Numero utente:" + userNumber);
    console.log("Numero random:" + randomNumber);
    console.log("Somma dei due numeri:" + sum);
}
else{
    console.log("Ha vinto il computer! Mi dispiace.")
}

//Funzione genera numero da 1 a 5
function rollDice(){
    const a = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    return a;
}

//Funzione controlla se numero e' pari o dispari
function checkIfEvenOrOdd(num){

    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

