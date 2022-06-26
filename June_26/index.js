//console.log("hi hello"); //consol.log(:hi hello");
//console.log("My name is GUrpreet Saini");

/* this is a multi line comment
in Java scriot we can comment in multiline as well as 
single line comment
*/
/*
let number1 = 10;
let number2 = 20;
let sum = number1 + number2;
console.log(sum);
*/
/*
Data types in java script
1. Boolean
2. Number
3. String
5. Undefined
6. Null
7. Object
8. Symbol
9. BigInt
*/
/*
let isWeekend = false;

if (isWeekend == true) {
    console.log("Join the session");
} else {
    console.log("Enjoy the Week");
}

let Number = 25;

if (Number % 2 == 0) {
    console.log("The number is Even");
} else {
    console.log('Number is odd')
}
*/
/*
let number1 = 4
let number2 = 8
let number3 = 29

if (number1 > number2 && number1 > number3) {
    console.log("number1 is Largest")
} else if (number2 > number1 && number2 > number3) {
    console.log("number2 is Largest")
} else {
    console.log("Number3 is largest")
}
*/
/*
let number = 7

if (number % 3 == 0 && number % 5 == 0) {
    console.log("Fizz Buzz")
} else if (number % 3 == 0) {
    console.log("fizz")
} else if
 (number % 5 == 0) {
    console.log("buzz")
} else {
    console.log(number)
}
*/

// Task: Print first 10 nos in reverse
/*
let number = 10;
while (number >= 0) {
    console.log(number);
    number = number -1;
}
*/

//Task: Print every even number between 1 and 45.
/*let number = 1
while (number <= 45) {
    if (number % 2 == 0) {
        console.log(number)
    }
    number = number + 1
}
*/

// Arrays : In JS, arrays are the special type of Obsjects

// let blahblah = [2, 4, 5, 7, 0, "something", "plasma"];
// console.log(blahblah[2]);



// let participants = ["aayush", "gurpreet", "sam", "pawan", "ismael"]

// let index = 0;
// while(index < 5) {
//     console.log(participants[index])
//     index = index + 1
// }

//TASK --> Assum an array of numbers and print from that array all even numbers

let num_array = [2, 6, 5, 9, 10, 200, 50001, 53, 96, 20, 5332];
// let index = 0

// while (index <= 10) {
//     let index_value = num_array[index];
//     if (index_value % 2 == 0) {
//         console.log(index_value);
//     }
//     index = index + 1 ;
// }
// let name = 0
// console.log(num_array[name])


let arr = [5,2,3,6,5,8,9,25,3,2,20];
let sum = 0;
for (let index = 0; index < arr.length; index = index + 1) {
    sum = sum + arr[index];
}
console.log(sum);

