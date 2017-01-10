//function will return first character of a string
function firstCharacter(word) {
    return word[0];
}

console.log("FIRST CHARACTER FUNCTION: ");
console.log( firstCharacter("dog") );
console.log (firstCharacter("supercalifragilisticexpialadocious") );
console.log ( firstCharacter(" ") );


//function will return last character of a string
function lastCharacter(word) {
    return word[word.length - 1];
}

console.log("LAST CHARACTER FUNCTION: ");
console.log( lastCharacter("Mr. Bean") );
console.log( lastCharacter("Mexico") );
console.log( lastCharacter("Crunchy chips ") );

//function that takes a string and a number, and returns the character at the position represented by the number
function charPosition(word, number) {
    if (number <= word.length) {
        return word[number-1];
    }
    else {
        return "There are not that many characters in your string. Try another number!";
    }
}

console.log("CHARACTER POSITION FUNCTION: ");
console.log( charPosition("elephant", 20) );
console.log( charPosition("cruising", 6) );
console.log( charPosition(" ", 1) );