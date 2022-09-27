// Expression Evaluation Round 1
console.log(4 + 4 / 2 );
console.log((2 + -7) * 3);
console.log(101 % 10);
console.log(12 - 4 % 3);
console.log(true && false);
console.log(true && !(false || false));
console.log(!true && !(false || false));
console.log('cat' + 'dog');
console.log(2 + 'pizza');
console.log(2.5 * 'fish');
console.log(5 >= 11);
console.log(5 === 5.0);
console.log(7 !== 7.1);
console.log(5 + 5 > 8);
console.log(6 + 6 !== 12);
console.log(2 > 1 || false);
console.log('true' === true);
console.log(10 % 2 === 0);
console.log(21 % 2 === 0);
console.log(21 % 2 !== 0);
console.log(21 % 2 === 1);
console.log(12 % 3 === 0);
console.log(9 % 3 === 0);
console.log(14 % 3 === 0);
console.log('new york'[0]);
console.log('new york'[1]);
console.log('san francisco'[2 * 3]);
console.log('bootcamp'[3].toUpperCase());
console.log('bootcamp'.indexOf('T'));
console.log('bootcamp'.indexOf('camp'));
console.log('bootcamp'.indexOf('o') > -1);
console.log('science'.indexOf('x') === -1);

// Expression Evaluation Round 2
// 1
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // could be nothing because of the capital D. but if capital D is not the issue then 3+11 = 14
idx * 2;
console.log(idx); // 14x2 = 28

// 2
var num = 33;
var isEven = num % 2 === 0;
console.log(isEven); // False is the answer because 1 does not === 0
console.log(!isEven); // True because they are not equal to

// 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); //whiteboard = 9 , str1 = 5, 9-5= 4
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C
var char = str2[num].toLowerCase();
console.log(char + '!'); // c! "!" is a string

// 4
var sentence = 'welcome to bootcamp prep';
var lastChar = sentence[sentence.length - 1];
console.log(lastChar); // the -1 means it starts from the last, the last does not start with zero so p is the answer
console.log(sentence.indexOf(lastChar)); // 21, seems i was off answer is 18

// Conditionals
// 5
var age = 35; // try different numbers here

if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}

// 6
var food = 'Mac n Cheese'; // try different strings here (Done :)

if (food.length > 10) {
  console.log("Thats a yummy dish");
} else {
  console.log('Basic food bro');
}
if (food[0] === 'p') {
  console.log('Is it Pizza?');
}

// 7
var num = 25; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}

// 8
var num = 78; // 

if (num % 5 === 0) {
  console.log('divisible by 5');
}
if (num % 3 === 0) {
  console.log('divisible by 3');
}

// 9
let myCollege = "Mercy CollegE"; // try different strings here

if (myCollege[0] === myCollege[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (myCollege[myCollege.length - 1] === myCollege[myCollege.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

// 10
let numBER = 29; // try different numbers here

if (numBER > 0) {
  console.log('positive');
} else if (numBER < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (numBER % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}





