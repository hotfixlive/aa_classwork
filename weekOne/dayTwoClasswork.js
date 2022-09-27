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
    let sum = sumNums( num1, num2);
    let avg = sum / 2;
    return avg;
}

function sumNums (num1, num2){
    return num1 +num2;
}
console.log(average(5,3))
console.log(average2(51,8))












