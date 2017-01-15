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


//function will add, subtract, multiply, or divide two numbers depending on what user or function orders it to do
function basicMath (num1, num2, command) {
    if (command === "add") {
        return num1 + num2;
    }
    else if (command === "subtract") {
        return num1 - num2;
    }
    else if (command === "mult") {
        return num1 * num2;
    }
    else if (command === "div") {
        return num1 / num2;
    }
    else {
        return 0; 
    }
}

console.log("\nMATH function: ");
console.log( basicMath(1, 4.678, "mult") );
console.log( basicMath(1, 4.678, "add") );
console.log( basicMath(1, 4.678, "subtract") );
console.log( basicMath(1, 4, "div") );
console.log( basicMath(1, 4.678, "pizzaburger") );

//function repeats the string however many number of times you specify
function repeatWord (word, number) {
    var output = "";
    
    for (var i = 1; i <= number; i++) {
        
        //Mathieu recommends using this syntax versus output += word as it's for a string versus number. The += will work 99.9% of the time, but there will be cases where it doesn't.
        output = output + word + "\n";
    }
    
    return output;
}

console.log("\nREPEAT function: ");
console.log( repeatWord("dog", 2) );
console.log( repeatWord("tunnup", 16) );

//function will not take anything, but just print out numbers 1 to 10 inclusively
function oneToTen() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

console.log("Print 1 to 10 function: ");
oneToTen();

//function will print numbers 1 to 10 as words
function oneToTenWords() {
    for (var i = 1; i<= 10; i++) {
        switch(i) {
            case 1:
                console.log("one");
                break;
            case 2:
                console.log("two");
                break;
            case 3:
                console.log("three");
                break;
            case 4:
                console.log("four");
                break;
            case 5:
                console.log("five");
                break;
            case 6:
                console.log("six");
                break;
            case 7:
                console.log("seven");
                break;
            case 8:
                console.log("eight");
                break;
            case 9:
                console.log("nine");
                break;
            default:
                console.log("ten");
        }
    }
}

console.log("\nPrint 1 to 10 function (in word form): ");
oneToTenWords();

//function that prints out numbers 1 to 10 inclusively, but depending on the number, will print it out that number of times
function oneToTenMeta() {
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= i; j++) {
            console.log(i);
        }
    }
}

console.log("\nPrint 1 to 10 function (in meta form): ");
oneToTenMeta();

//function reverses string
function reverseString (word) {
    var reversedWord = "";
    for(var i = word.length - 1 ; i >= 0; i--) {
        reversedWord = reversedWord + word[i];
    }
    
    return reversedWord;
}

console.log("\nReversed String Function: ");
console.log( reverseString("cat") );
console.log( reverseString("helicopter and car chases!") );
console.log( reverseString(" ") );

//factorial function
function factorial (number) {
    var product = number;
    
    if (number === 0) {
        product = 1;
    }
    else if (number < 0) {
        product = "can't compute negative integers!";
    }
    else {
        for (var i = number; i >= 2; i--) {
            product = product *(i-1);
        }
    }
    
    return product;
}

console.log("\nFactorial Function: ");
console.log( factorial(5) );
console.log( factorial(12) );
console.log( factorial(-3) );

//function finds the longest word in a phrase
function longestWord (phrase) {
    var splitPhrase = phrase.split(" ");
    
    var word = "";
    var longest = 0;
    
    for(var i = 0; i < splitPhrase.length; i++) {
        if(longest < splitPhrase[i].length) {
            longest = splitPhrase[i].length;
            word = splitPhrase[i];
        }
    }
    
    return word;
}

console.log("\nLongest Word Function: ");
console.log ( longestWord("television is lit these days") );
console.log ( longestWord("zebra ate pizza") );
console.log ( longestWord("Marie Poppins is supercalifragilisticexpialadocious") );

//function will output "Hello World" proper! 
function capitalize (phrase) {
    phrase = phrase.toLowerCase().split(" ");

    
    for (var i = 0; i < phrase.length; i++) {
        //taking each word in each array position, splitting each word into separate letters, Upper Casing first letter of each word, and joining back the letters again into their words
        phrase[i] = phrase[i].split("");
        phrase[i][0] = phrase[i][0].toUpperCase();
        phrase[i] = phrase[i].join("");
    }
    
    //joining up all the words split up in phrase
    var capPhrase = phrase.join(" ");

    return capPhrase;
}

console.log("\nCapitalize first letter function: ");
console.log( capitalize("HeLLO wOrLd") );
console.log( capitalize("ThE DOG jumped oVeR tHE mooN") );
console.log( capitalize("theSE CHALLENGES arE harRRRRRd") );

//function takes an array and returns largest number of the array

function largestNumber (numArray) {
    var largest = -Number.MAX_SAFE_INTEGER;
    
    for(var i = 0; i < numArray.length; i++) {
        if(largest < numArray[i]) {
            largest = numArray[i];
        }
    }
    
    return largest;
}

console.log("\nLargest number in array function: ");
console.log( largestNumber( [1, 45, 55545, -3, 3, 0] ) );
console.log( largestNumber( [-55, -400, -2.99, -0.11] ) );

//function filters all values in array and eliminates all values that are falsy (i.e. "false", 0, null, undefined, NaN)

//--FIRST METHOD WITHOUT USING FILTER (IGNORE)
/*function truthyArray (a) {
    var filteredArray = [];
    var counter = 0;
    
    for (var i = 0; i < a.length; i++) {
        if (Boolean(a[i])) {
            
            //if value of array "a" at index "i" is a truthy value, it will put truthy value into filteredArray and increase counter for next truthy value found
            filteredArray[counter] = a[i];
            counter++;
        }
    }
    
    return filteredArray;
    
}

console.log("\nFiltered truthy array function: ");
console.log( truthyArray( [1, "dog", false, true, 0, 99] ) );
console.log( truthyArray( [NaN, "dog", 3.14, undefined, null, "cat ate pizza", 1, "", firstCharacter("zebra")] ) ); */

//--SECOND METHOD OF FILTERING ARRAY USING FILTER
var a = [ NaN, "dog", 3.14, undefined, null, "cat ate pizza", 1, "", firstCharacter("zebra")];
var b = [1, "elephant", false, true, 0, 99];

function isTruthy (a) {
    return Boolean(a) == true;
}

//var newArray = a.filter(Boolean); //Can also do like this
var newArray = a.filter(isTruthy);
var newArray2 = b.filter(isTruthy);

//testing if function works
console.log("\nTruthy filter function: ");
console.log(newArray);
console.log(newArray2);
//--END SECOND METHOD OF FILTERING ARRAY USING FILTER


//function returns sum of all numbers in array
function sumArray (a) {
    var sum = 0;
    
    for (var i = 0; i< a.length; i++) {
        sum += a[i];
    }
    
    return sum;
}

console.log("\nSum of all numbers in array function: ");
console.log( sumArray( [1, 2, 3, 4, 5] ) );
console.log( sumArray( [3333, true, false, 0.0001, 0.99, -1]) );

//function takes two arrays and returns array of all elements in only ONE array
function unique (arr1, arr2) {
    var uniqueArr = [];
    
    //looking at first array
    arr1.forEach( function(eachItem){
        //if current Number of array 1 does not exist in array 2, push it into the unique array
        if( arr2.indexOf(eachItem) === -1){
            uniqueArr.push(eachItem);
        }
    });
    
    //looking at second array
    arr2.forEach( function(eachItem){
        //if current number of array 2 does not exist in array 1, push it into unique array
        if( arr1.indexOf(eachItem) === -1){
            uniqueArr.push(eachItem);
        }
    });
    
    return uniqueArr;
}

console.log("\nEXERCISE 18: ");
console.log("Unique array: ", unique([1, 2, 3], [1, 2, 4, 5]) );

//MINI CHALLENGE
function isDog(item){
    return item === "dog";
}

function mapArray (arr, isDog){
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++){
        newArr.push( isDog( arr[i] ) );
    }
    
    return newArr;
}

console.log("\nMini Challenge: ");
console.log("Mapped array: ", mapArray(["dog", "cat", "bird", "dog", "mosquito"], isDog) );