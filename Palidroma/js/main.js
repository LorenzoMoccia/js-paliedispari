"use strict";

const userWord = prompt("Inserisci una parola");

function checkPalindroma(word){

    let reverseString = "";

    for (let i = word.length - 1; i >= 0; i--) { 
        reverseString += word[i]; 
    }

    if(reverseString == word){
        console.log("La string e' palindroma!");
    }
    else{
        console.log("La string non e' palindroma!");
    }
}

checkPalindroma(userWord);