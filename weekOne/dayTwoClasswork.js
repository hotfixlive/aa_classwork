console.log("Welcome to day two E");


//assigment, 
let num = 20
if (num = 30) {
    console.log("in the if");
} else {
    console.log("in the else");

}

// functions allow us to make our code dry
// dry code means don't repeat yourself

/* 
DON'T
REPEAT 
YOURSLEF
*/

function foo() {
    return "bar";

}
console.log(foo(1)); // the open and closing () this is called function invocation 
console.log(foo);

function foo2 (p1, p2) {
    return p1 + " " + p2;

}

console.log("Enmanuel", "Perez")

function sayHello() {
    console.log("Hello")
}
sayHello();

function ourLLastname() {
    console.log("Perez")
}
ourLLastname();

// functions can also help clean up the logic of your code
function average(num1, num2) {
    let sum = num1 + num2;
    let avg = sum / 2 ;
    return avg;
}

function average2(num1, num2) {
    let sum = sumNums (num1, num2);
    let avg = sum / 2;
    return avg;
}

function sumNums (num1, num2) {
    return num1 +num2;
}
console.log(average(5,3))
console.log(average2(1,8))

// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true
// if no remainder is supposed to give me zero

function isOdd(num) {
    if (num % 2 === 1) {
        return true
    } else {
        return false
    }
}
console.log(isOdd(2))
console.log(isOdd(5))


function isOdd2(num) {
    return num % 2 !== 0; 
}
console.log(isOdd2(-17))

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    return (num + 5);
    }
console.log(plusFive(10))
console.log(plusFive(2))
console.log(plusFive(-8))

/*Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
*/
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
/*function threeOrSeven(num) {
    return true;
} else if (num % 3 === 0 || num % 7 === 0) {
    return false;
}
*/

function threeOrSeven(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    }else {
        return false;
    }
}
console.log(threeOrSeven(3))
console.log(threeOrSeven(42))


function threeOrSeven2(num) {
    return false
}  
console.log(threeOrSeven2(8))



// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//

function hello(str) {
    console.log(str);
}

hello("child");

// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//


function yell(string) {
  console.log("I want to go to the store".toUpperCase());
  console.log("Time to program".toUpperCase());
}

yell();

// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
    console.log("Hey Anthony".toLowerCase());
    console.log("YEA! tht was fun".toLowerCase());
  }

whisper();

// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
// indexOf
function isSubstring(searchString, subString) {  // with the conditional
    if (searchString.indexOf(subString) > -1);
    return true;
} else {
    return false;
}

isSubstring();






// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
/*
function echo(string) {
   return
  }

echo("Mom!");
*/











