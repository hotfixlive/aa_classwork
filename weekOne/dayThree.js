
/*
function day(day33) {
    console.log("this is Day 3");
}

day();


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

for ( let i = 1; i < 11; i++ ) {   //i = 1, 1 is less than 10, i++ is an incrementor
    console.log(i);
}
console.log("after the loop")

//write a funciton print range
//you can also assign variables to those "for statements"

function printRange(start,end){
    for(let i = start; i <= end; i++) {
        console.log(i)
    }
}

printRange(3,10)


// while loop

/*
function printRange1(start,end) {
    let i = start;
    while (i <= end) {
        console.log(i)
        i++
    }
}

printRange1(7,20)

let i = 20;
while ( i === 20) {
    console.log(i);
    
}


let i = 20;
while ( true ) {
    console.log(i);
    
}

let i = 20;
while ( false ) {
    console.log(i);
    
}
*/
/*
function skipFive(num) {
    for (let i = 1; 1 <= num; i++) {
        if (i === 5) {
            continue
        }
        console.log(i);
    }
}

skipFive(20);
*/

function breakAtFive(num) {
    for (let i = 1; i <= num; i++) {
        if (num === 5) {
            break;
        }
        console.log(i);
    }
}
breakAtFive(20);




// a number than is less than 2
// a prime number is only divisible by itself
function isPrime(num) {
    if (num < 2) return false;
    for (let n = 2; n < num ; n++) {
        if (num % n === 0) {
            return false;
        }
    }
            return true;
}

console.log(isPrime(7))
console.log(isPrime(11))

