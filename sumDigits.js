// Addition digits in a number / Eugene Kuzenko 

let number = 34567;  /* input any number */

if (isNaN(number)) {
    console.log("\n Enter the number, please. \n");
    return 0;
}
function sumDigits(number) {
let sum = 0;

if (number < 0) {
    number =- number; /* get rid of the negative number */
}

do {
sum += number % 10; /* get the remainder of the division */
number = Math.floor(number / 10);  /* method (Math.floor) rounds a number DOWN to the nearest integer.*/
}
 while (number > 0);
 return sum;
}
console.log("\nThe sum of the digits of your number is : ", sumDigits(number), "\n");

