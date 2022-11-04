
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


console.log(" \nGenerated Teudat Zehut =>  ", checkTeudatZehut(generateRandomTeudatZehut()));
console.log(" \nGenerated Teudat Zehut =>  ", checkTeudatZehut(generateRandomTeudatZehut()));
console.log(" \nGenerated Teudat Zehut =>  ", checkTeudatZehut(generateRandomTeudatZehut()));

console.log(checkTeudatZehut('123456782'));
console.log(checkTeudatZehut('346784324'));
console.log(checkTeudatZehut('12345a'));
console.log(checkTeudatZehut('123456789233'));
console.log(checkTeudatZehut('1234'));

function generateRandomTeudatZehut(){
    let RandArr = [];
    let NewTZ = [];
    let StrNewTZ = "";
    for (let i = 0; i < 8; i++) {
        RandArr[i] = Math.round(Math.random() * 9);
        NewTZ[i] = RandArr[i];
    }
    RandArr =  ConvertEvenOdd(RandArr);
    RandArr = sumElemBigNnum(RandArr);
    RandArr = sumDigits(RandArr);
    let checkDigit = 10 - RandArr % 10;
    NewTZ[8] = checkDigit;
    for (let i=0; i<NewTZ.length;i++){
        StrNewTZ += NewTZ[i];
    }
    return StrNewTZ;
}

function checkTeudatZehut(teudatStrNumber) {
    let Check = ChekInput(teudatStrNumber);
    let arrIntNum = ConvertStr2ArrNum(Check);
    let BigNum = ConvertEvenOdd(arrIntNum);
    let processedNumber = sumElemBigNnum(BigNum);
    let res = sumDigits(processedNumber);
    let validator = ValidatorTZ(res);
    let PrintValid = prnValid(validator);
return " \nNumber Teudat Zehut : "+teudatStrNumber+" : is "+PrintValid;
}

function ConvertStr2ArrNum(teudatStrNumber) {
    let arTZ = Array.from(teudatStrNumber);
    let arrTzNum = arTZ.map(function(number,index){
                return arTZ[index] = +arTZ[index];
    }); 
    return  arrTzNum;
 }

function ConvertEvenOdd(arIntNum) {
        let intNum = arIntNum.map(function(number,index){
        index % 2 != 0 ? number=number*2 : number;
        return arIntNum[index] = number;
     }); 
return intNum;
}

function sumElemBigNnum(BigNum) {
        let Big = BigNum.map(function(num,index) {
        num > 9 ? num = (num-10)+1 : num;
        return BigNum[index] = num;
    });
return Big;
}

function sumDigits(processedNumber) {
        let res = processedNumber.reduce(function(result,number) {
            return result + number;
        }, 0);
        return res;
}

function ValidatorTZ(res) {
    let TrueFalse = res % 10 == 0 ? true : false;
    return TrueFalse;
}

function prnValid(validator) {
    let valid = validator == true ? 'Valid' : 'Not Valid';
    return valid;
}

function ChekInput(teudatStrNumber) {
    let arr = ConvertStr2ArrNum(teudatStrNumber);
    for ( let i =0; i < arr.length; i++) {
        if ((arr[i] < 0 || arr[i] > 9) || (arr.length != 9)) {
        console.log("\nYour number : ", teudatStrNumber," : is NOT in the correct format.\n Please, enter number Teudat Zehut '9' digits from '0 - 9'\n");
        return process.exit(); 
        } 
    }
    return teudatStrNumber;
}

