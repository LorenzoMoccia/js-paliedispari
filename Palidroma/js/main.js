"use strict";

const userWord = prompt("Inserisci una parola");

function checkPalidroma(word){

    let reverseString = "";

    for (let i = word.length - 1; i >= 0; i--) { 
        reverseString += word[i]; 
    }

    console.log(reverseString);
}

checkPalidroma(userWord);