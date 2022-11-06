
// Validation Teudat Zehut // Eugene Kuzenko

/* 
1.	Write function checkTeudatZehut(teudatStrNumber) 
1.1.	Takes string with identity number
1.2.	Returns true or false
1.2.1.	True if the given number matches the Israel identity rules that are as follows
1.2.1.1.	Number should contain 9 digits. Each digit ffrom 0 to 9
1.2.1.2.	Control sum of the numbers should be multiplied of 10 (remainder from division on 10 is 0).
             Number are taken by following algorithm. At even indexes (0, 2, 4, 6, 8) number will be value of the digit at appropriate index.
             At odd indexes (1, 3, 5, 7, 9) number is computed as digit * 2 and if result less than 10 the result is taken as is,
             otherwise result will be sum of the result’s digits. Example, if digit equals 4, then 8 (4 * 2) will be taken as is, 
             but if digit equals 5 then 5 * 2 =  10, so 1(1 + 0) will be taken
1.3.	Example, checkTeudatZehut(“123456782”) will return true,
        because 1 + 4(2 * 2) + 3 + 8(4 * 2) + 5 + 3 (6 * 2 = 12=> 1+ 2=3) + 7 + 7(8 * 2 = 16 => 1 + 6 =7) + 2 = 4
*/

/*
console.log(" \nGenerated Teudat Zehut =>  ", checkTeudatZehut(generateRandomTeudatZehut()));
console.log(checkTeudatZehut('123456782'));
console.log(checkTeudatZehut('346784324'));
console.log(checkTeudatZehut('12345a'));
console.log(checkTeudatZehut('123456789233'));
console.log(checkTeudatZehut('1234'));

function generateRandomTeudatZehut(){
    let randArr = [];
    let newTZ = [];
    let strNewTZ = "";
    for (let i = 0; i < 8; i++) {
        randArr[i] = Math.round(Math.random() * 9);
        newTZ[i] = randArr[i];
    }
    randArr =  convertEvenOdd(randArr);
    randArr = sumElemBigNnum(randArr);
    randArr = sumDigits(randArr);
    let checkDigit = 10 - randArr % 10;
    newTZ[8] = checkDigit;
    for (let i=0; i<newTZ.length;i++){
        strNewTZ += newTZ[i];
    }
    return strNewTZ;
}

function checkTeudatZehut(teudatStrNumber) {

    let check = chekInput(teudatStrNumber);

    let arrIntNum = convertStr2ArrNum(check);
    let bigNum = convertEvenOdd(arrIntNum);
    let processedNumber = sumElemBigNnum(bigNum);
    let res = sumDigits(processedNumber);
    let validator = validatorTZ(res);
    let printValid = prnValid(validator);
return " \nNumber Teudat Zehut : "+teudatStrNumber+" : is "+printValid;
}

function convertStr2ArrNum(teudatStrNumber) {
    return Array.from(teudatStrNumber).map(function(number){ return number = +number}); 
}

function convertEvenOdd(arIntNum) {
        return arIntNum.map(function(number,index){ index % 2 != 0 ? number=number*2 : number; return arIntNum[index] = number}); 
}

function sumElemBigNnum(bigNum) {
        return bigNum.map(function(num,index) { num > 9 ? num = (num-10)+1 : num; return bigNum[index] = num });
}

function sumDigits(processedNumber) {
        return processedNumber.reduce(function(result,number) {return result + number;}, 0);
}

function validatorTZ(res) {
    return res % 10 == 0 ? true : false;
}

function prnValid(validator) {
    return validator == true ? 'Valid' : 'Not Valid';
}

function chekInput(teudatStrNumber) {
    let arr = convertStr2ArrNum(teudatStrNumber);
    for ( let i =0; i < arr.length; i++) {
        if ((arr[i] < 0 || arr[i] > 9) || (arr.length != 9)) {
        console.log("\nYour number : ", teudatStrNumber," : is NOT in the correct format.\n Please, enter number Teudat Zehut '9' digits from '0 - 9'\n");
        return process.exit(); 
        //return false;
        } 
    }
    return teudatStrNumber;
   //return true;
}
*/

// CW - TZ
   function checkTeudatZehut(teudatStrNumber) {
// let res = false
// if (teudatStrNumber.length == 9 && !isNaN(teudatStrNumber)) {
//     let arrayForSum = getArrayForSum(teudatStrNumber);
//     let sum = getSum(arrayForSum);
//     res = sum % 10 == 0;
// }
// return res;
// }

function checkTeudatZehut(teudatStrNumber) {
let arrayForSum = getArrayForSum(teudatStrNumber);
let sum = getSum(arrayForSum);
return sum % 10 == 0;
}
function getArrayForSum(teudatStrNumber) {
    let array = Array.from(teudatStrNumber);

    // let res = [];
    // for(let i = 0; i < array.length; i++){
    //     res[i] = getCurrentNumber(array[i], i); // i - index
    // }
    // return res;
    return array.map(getCurrentNumber);
}
function getCurrentNumber(element, index) {
    return index % 2 == 0 ? +element : getNumberOddIndex(element);

}
function getNumberOddIndex(element) {
    let res = element * 2;
    if (res > 9) { res -= 9;}
    return res;
}
function getSum(array) {
    // let res = 0;
    // for (let i = 0; i < array.length; i++) {
    //     res += array[i];
    // }
   // return res;
        return array.reduce(function(res, cur) {
            return res + cur;
   }, 0);

// let res = array[0]; //whith out res = 0;  *********
    // for (let i = 1 /*  i = 0 ***** */; i < array.length; i++) {
    //     res += array[i];
    // }
   // return res;
   //return array.reduce(function(res, cur) {
    //return res + cur;
//},); whith out 0,  *************

}
//console.log(checkTeudatZehut`123456782`);

 let number = [`123456782`, `1234`, `abcd123`, `12345789`];
 number.forEach(function(e) {
    console.log(`teudat zehut: ${e}, return of the method checkTeudatZehut : ${checkTeudatZehut(e)}`)
 });

