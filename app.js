let number = 3456;  /* enter any number */
let num = 0;

if (number < 0) {
    number = number * -1; /* get rid of the negative number */
}
do {
num = num + number % 10; /* get the remainder of the division */
number = Math.floor(number / 10);  /* method (Math.floor) rounds a number DOWN to the nearest integer.*/
}
 while (number > 0);
 console.log("\nThe sum of the digits of your number is : ", num, "\n");





// console.log("Hello world");
// for( i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)
//     });
// }
// i = 100;
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) });
// } => 0 1 2

// for (var i = 0; i < 3; i++) {
//      console.log(i) ;
// }
// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1, op2);
// console.log(res)
// function sumDigits(number) {
//     //TODO
//     //function should return sum of a given number digits
// }
// //Example
// console.log(sumDigits(123)); //should be printed out 6
