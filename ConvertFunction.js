// 1.	Write function fromNumberToString(number, base) that returns string 
// presentation of a given number in a given base,
//  where number is any integer number, base is a computing base from 2 to 36, examples:
// 1.1.	FromNumberToString(900550, 36) returns word ‘java’
// 1.2.	FromNumberToString(46016237, 36) returns word ‘react’
// 1.3.	FromNumberToString(11483, 2) returns string "10110011011011"
// 2.	Write function fromStringToNumber(string, base) that returns
//  number from its string presentation in a given base,
//  where string is a string presentation, base is a computing base from 2 to 36, examples:
// 2.1.	FromStringToNumber(‘java’,36) returns number 900550
// 2.2.	FromStringToNumber(‘react’,36) returns number 46016237
// 2.3.	FromStringToNumber(‘10110011011011’,2) returns number 11483

// Convertation Number to String and back // Eugene Kuzenko

let number = 46016237;   // data input
let baseNum = 36;         // data input

let string = "10110011011011";   // data input
let baseStr = 2;                 // data input

if (isNaN(number) || isNaN(baseStr) || isNaN(baseNum)){  // checking for valid input
        console.log("\n Enter correct numbers, please. \n");
        return 0;
    }
    number = Math.abs(number);  // the absolute value of a number
    baseNum = Math.abs(baseNum);
    baseStr = Math.abs(baseStr);
function fromNumberToString(number, baseNum) {
    let str = "";
     do{
       let rest = (number % baseNum).toString(baseNum);  // the numerical remainder of the division is translated into a hexal string
       str = rest + str;  // reverse string concatenation
       number = Math.trunc(number / baseNum);  // allocate an integer without a remainder from division
     }while (number != 0);
    return str;
}
// INSTEAD OF FUNCTION  fromStringToNumber(string,baseStr), I CAN WRITE :

// let numb = parseInt(string,baseStr);
// console.log("string : ",string, '//', "number : ",numb);

function fromStringToNumber(string, baseStr) {
    let numb = "";
    for (let i = 0; i < string.length ; i++)  // pass along the line
    {
        let rest = parseInt(string[i],baseStr);  // converting each character to a number
        numb = numb*baseStr + rest;  // get a numeric value
    }
    return numb;
}
console.log("\n Entered number : ",number," in ",baseNum," number system is : ",'"',fromNumberToString(number, baseNum),'"\n');
console.log("\n Entered string : ",'"',string,'"', " in ",baseStr, " number system is :  ",fromStringToNumber(string, baseStr),"\n");
