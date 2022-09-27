console.log('Hello World');
console.log(2);
console.log(2+2);
console.log(2*5);
console.log(10/2);
console.log(10/3);
console.log(10%3);
console.log(10%2);
// booleans
console.log(true||false);
console.log(false||true);
console.log(true||false);
console.log(false||false);
console.log(true||true);
console.log(false||true);
console.log(true||false);
console.log(!true);
console.log(!!true);
console.log(!false);
// pemdas
console.log(10>10);
console.log(10<20);
console.log(25>=5);
console.log(12===11);
console.log(12!==11);
console.log(12=='12');
// index
let str = "hello"
console.log(str[1]);
console.log("hello".length);
console.log("hello".indexOf('h'));
console.log("hello".indexOf('1'));
console.log("hello".indexOf('x'));
console.log("hello".indexOf('hell'));
// string concatenation
console.log("race".concat("car"));
console.log("race" + "car");
console.log("hello" + "world");
console.log(4 + "hi");
// dont do the two below console logs
console.log(4 * 'hi');
console.log(4 * '10');
// other sting methods, way more than the above
console.log('hello'.toUpperCase());
console.log('hello'.toLowerCase());
// below since no argument was given it will give you a copy
console.log('hello'.slice());
// removes 1, since argument 1 was given
console.log('hello'.slice(1));
// removes the first 3. First argument inclusive, Second argument exclusive 
console.log('hello'.slice(1,3));

// Variable Delcaration - 3 ways - var, let, const -- only use let + const since its the new way
// 1 = sign is an assigment 
let name = "enmanuel"
console.log(name);
console.log(name==="enmanuel");
// if i use "1" equal sign, it will REASSIGN THE function
name = "enmanuel perez"
console.log(name);

/* good naming convetions or variables , name it something easy to remmember 
let name = 25  (this is not a good name)
we cannot also name things in reserved keywords. ex: let null = "mike"
always want to start naming thing in characters ex: let 2name (this a bad example) // let lastName = "Perez" (this is good) */

let firstName = "Enmanuel"
let lastName = "Perez"
let test
console.log(test);

// if statements - else
if (20 === 20) {
    console.log("they are equal");
 } else {
    console.log("not euqual");
 }

let num = 20.5
if (num===20) {
    console.log("equals 20");
} else if (num>20) {
    console.log("greater");
} else {
    console.log("less than");
}

if (0) {
    console.log(false);
} else {
    console.log(true);
}


























