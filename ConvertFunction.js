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

  
function fromNumberToString(number, base) {
    let numb = 0;
    let rest = 0;
    if(isNaN(base) || isNaN(number)) {
        console.log("\n".base, ": wrong number. Enter correct numbers, please. \n");
        return 0;
    }
    number = Math.abs(number);
    base = Math.abs(base);
    let power = number.length-1;

    let str = "";
    let x=0;
   
     do{
        let rest = (number % base);

        if(base > 10) {
             
          str = String.fromCharCode(rest + 87) + str; 
            number = Math.trunc(number / base); 
        }
        else{
            //rest = +string;
            let rest = (number % base);
            str = str + rest;
            number = Math.trunc(number / base); 

        }
       
     }while (number != 0);
    return str;
}

function fromStringToNumber(string, base) {
    let numb = 0;
    let rest = 0; 
    let power = string.length-1;
         if(isNaN(base)) {
            console.log("\n".base, ": wrong number. Enter correct numbers, please. \n");
            return 0;
        }
     base = Math.abs(base);   
     for (let i = 0; i < string.length ; i++)  // pass along the line
    { 
        if(isNaN(string)) {
            rest = string[i].charCodeAt()-87;
            numb = numb*base + rest;  // get a numeric value
        }
        else {
            rest = +string;
            numb = numb +  string[i] * Math.pow(base,power);
            power = power-1;
        }
    }
     return numb;
}
console.log(" \n RESULT  function fromNumberToString: \n");
console.log( fromNumberToString(900550, 36));
console.log( fromNumberToString(46016237, 36));
console.log( fromNumberToString(11483,2));
console.log(" \nRESULT function fromStringToNumber : \n");
console.log(fromStringToNumber('java',36));
console.log(fromStringToNumber('react',36));
console.log(fromStringToNumber('10110011011011',2));
