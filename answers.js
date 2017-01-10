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

//function adds two numbers
function add(num1, num2) {
    return num1 + num2;
}

console.log("ADDING FUNCTION: ");
console.log( add(3, 4) );
console.log( add(23462346236, 0.00001) );
console.log( add("GitHub", 3.14) ); //combines the string with the number
console.log( add( firstCharacter("cat"), 1) + "\n"); //combines output of firstCharacter function with number

//function multiplies two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

console.log("MULTIPLYING FUNCTION: ");
console.log( multiply(3, 4) );
console.log( multiply(23462346236, 0.00001) );
console.log( multiply("GitHub", 3.14) ); //outputs NaN
console.log( multiply( firstCharacter("cat"), 1) ); //outputs NaN

