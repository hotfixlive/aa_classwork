myName = "Enmanuel Perez"
console.log(myName);

/*
Variable rules
must start with a letter
must start lower case ( camel case allowed, ex enmanuelPerez)
cannot start with a symbol ex <mike

variables allow us to store values 
*/
/* 
there are 7 javascript types
1) number = PEMDAS = (+ - * / %(MODULO, gives out the remainder) ) 
2) string = words are always in quotes, keep numbers with numbers and string with strings
3) boolean = true or false
4) undefenied = means the variable has not been assigned
    ex: let password; <-- this will throw undefined since we have not assigned it yet
5) null
6) symbol = <!-- fgshjfgsjkh -->
7) object
*/

// JAVACRIPT COMPARISONS 
/* 
!= the inequality operator, check if the two ARE NOT EQUAL
!== (does not equal to) ex: 3 !== 3 *this will return false because its saying 3 doesnt equal to 3, BUt
3 does equal to 3. Another example 4 !== 3, this will return true b/c 4 does not euqal to 3
=== (equals)
>= (greater than OR equal to)
<= (less than OR equal to)
> (greater than)
< (less than)
*/

console.log(5 + "34"); // this just pastes 5 and 34 = 534
console.log(5 - "4"); // strangely enough this will subtract === 1
console.log(10 % 5); // gives the remainder 
console.log(5 % 10); // gives the remainder
console.log("Java" + "Script"); // the + sign will just glue it together
console.log(5 + 34); // here it adds it together because its not in quotes
console.log(" " + " "); // output will be spaces
console.log (" " + 1000); //output will be SPACE then 1000
console.log (true + true); // true is basically 1, so 1 + 1 =2
console.log (true + false); // false is a negative 1, 1 + -1
console.log (false + true);
console.log (false - true); // -1 - 1
console.log (3-4);
console.log("enmanuel" - "perez"); // will return NaN = not a number, you cannot subtract strings with words
console.log("enmanuel" + "perez"); // output enmanuelperez
console.log("enmanuel" + " perez"); // output enmanuel perez cuz the space before the P
console.log("enmanuel" + " " + "perez"); // also output enmanuel perez cuz the " space " 

/*
//Evaluate the below comparisons:
5 >= 1
0 === 1
4 <= 1
1 != 1  
"A" > "B"
"B" < "C"
"a" > "A"
"b" < "A"
true === false
true != true
*/
console.log(5 >= 1); // 5 is greater than OR equal to 1 , YES its GREATER than
console.log( 0 ===1 ); // false
console.log (4 <= 1); // false
console.log(1 != 1); // false, its saying 1 does not equal 1, this is false, since 1 does equal 1
console.log("A" > "B");
console.log (true === false);
console.log(true != true);


// add variable "firstName" and "lastName" // so that they equal your name

// create a variable that holds the answer // of "firstName" + " " + "lastName"

// Evaluate this question. What is a + b?
// var a = 34;
// var b = 21;
// a = 2;
// a + b // what is the answer here?

// What is c equal to?
// var c;

var a = 34;
var b = 21;
a = 2;
console.log(a + b);

let firstName = "Enmanuel";
let lastName = "Perez";
ourName = firstName + " " + lastName;
console.log(ourName);

var c; // equals to undefined because nothing has been assigned to

// ***********EXERCISE 3*************
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!

/* ****The CODE BELOW WORKS ON A REGULAR js PAGE ******* 
alert("We will now test my calculator");
let firstNumber = prompt("Enter a random number");
let secondNumber = prompt("Enter a second random number");
// Number keyword allows us to turn numbers in " " to a regular number
let adding = Number(firstNumber) + Number(secondNumber);
alert("You did it!, the answer should be " + adding); 
*/

// Control Flow
/* JAVASCRIPT CONDITIONALS
-----------------
if
else
else if
<!-- ternary operator -->
<!-- switch -->
*/

// if statement example
let phone = "iPhone";
if (phone === "iPhone") {
    console.log("Yes it's an iPhone");
}

// if else statement example
let mask = "mask required";
mask = "No longer required";
if (mask === "mask required") {
    console.log("Yes, masks are required");
} else {
    console.log("hmm, i thought it was required");
}

//else if statement examples
let masks = "mask required";
masks = "No longer required";
masks = "Visitor now decides if masks are required for them";
if (masks === "mask required") {
    console.log("Yes, they are still required");
} else if (masks === "No longer required") {
    console.log("Rules changed, No longer required");
} else {
    console.log("Im not sure if masks are required, Do whats safe for you");
}

/*

JAVASCRIPT LOGICAL OPERATORS
-----------------
&& (THIS MEANS AND AND AND AND)
|| (THIS MEANS OR OR OR OR )
! (THIS MEANS THE OPPOSTITE OF SOMETHING, THIS IS KINDA TRICKY, its like a ON/OFF SWITCH)
IF WE DO !true  <---this will return false
if we do:
 newnewnewname = "Mike";
 if (!(newnewnewname === "Mike")) {   ** ! makes it false **
    console.log("I'm Mike");
 } else {
    console.log("I'm not Mike");     ** this will print **
 }

*/
// && example
if (firstName === "Enmanuel" && lastName === "Perez") {
    console.log("Welcome Hotfixlive!");
}

//   || example 
if (firstName === "EnManUel" || lastName === "PeRez") {
    console.log("Welcome Hotfixlive!");
 } else {
        console.log("Hmmmm, i don't know you");
 }


//another || example using else if statements
if (firstName === "EnManUel" || lastName === "PeRez") {
    console.log("Welcome Hotfixlive!");
 } else if (ourName === "Enmanuel Perez") {
    console.log("Thats me Enmanuel aka Hotfixlive");
 } else {
    console.log("Bruhh, who are you?");
 }

 //another && example using else if statements

if (firstName === "EnManUel" || lastName === "PeRez") {
    console.log("Welcome Hotfixlive!");
 } else if (ourName === "ENManuel PREez") {
    console.log("Thats me Enmanuel aka Hotfixlive");
 } else {
    console.log("Bruhh, who are you?");
 }


 newnewnewname = "Mike";
 if (!(newnewnewname === "Mike")) {
    console.log("I'm Mike");
 } else {
    console.log("I'm not Mike");
 }

 /*
******EXERCISE #4*****
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"
*/


/*  ****CODE BELOW WORKS ON CHROME CONSOLE***** 
alert("Hello there, It's time for your new car!, oh yeah, and its KEYLESS");
let age = prompt("Let's being with, What is your age?");
if (Number(age) < 18 ) { // less than 18
    alert("Sorry, too young, maybe next time");
} else if (Number(age) > 18 ) { // greater than 18
    alert("You seem like a vet, congrats on your new car");
} else if (Number(age) === 18) { // equal to 18
    alert("You're a bit young, but CONGRATS on your new car!")
}

*/

/* JAVASCRIPT FUNCTIONS 
var a = function name() {}
function name() {} ---> example
function sayHello() {
    console.log("Hello")
}
sayHello(); //this means what this function will always console log "Hello"
return
<!-- () => MEANS calling a function -->
"whatever is in these quotes are arguments"
*/

// 1 way
function sayHello() {
    console.log("Hello")
}
sayHello();

function ourLLastname() {
    console.log("Perez")
}
ourLLastname();

// 2nd way

let ourLLLastname = function() { // this is also called an Anonymous function
    console.log("Perez");
}
ourLLLastname();

// 3rd way --- the most efficient way
function phone2(ring) {
    console.log(ring);
}
phone2("RRRRRRRRRRRRIIIING");
phone2("reeeeeeeeeRRIIIING");
phone2("RuuuiiiiiiiiRIIIING");

//return example
function multiply(a, b, c) {
    return a * b * c; // RETURN ENDS THE FUCNTION, DOING AN EXAMPLE BELOW
}

multiply (1, 1, 5);

function aad(a, b, c) {
    return c ;
    return a + b + c; // here as we can see a + b + c will not be ran, the return function ended with return c
}

aad (1, 1, 5);

// function works flawlessly on javascript console on chrome

// return function can provide different results if running if else statements 

function aDD(a, z) {
    if(a > 5 || z > 5){
        return "This is too hard";
    } else {
        return a + z;
        }
    }
aDD(10, 11); //HERE SINCE 10, 11 are greater than 5 it should be "this is too hard" BUT...
aDD(2, 1); // since its an if else statement it reads the other line which is 2,1 and those are less than 5 and it adds em up

/* **** EXERCISE #5 *******
// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"

*/

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge() {
	let age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
let checkDriverAge2 = function() {
	let age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

function checkDriverAge5(age) {
	if (Number(ageS) < 18) {
		console.log( "Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(ageS) > 18) {
		console.log( "Powering On. Enjoy the ride!");
	} else if (Number(ageS) === 18) {
		console.log( "Congratulations on your first year of driving. Enjoy the ride!");
	}
}





