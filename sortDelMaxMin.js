//  Eugene Kuzenko HW - 15

/* 1.	Write function minMax(numbers) 
1.1.	Takes array of numbers
1.2.	Returns array containing two numbers: first is minimal value , second is maximal value form input array
1.3.	Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5]
1.4.	Implementation Requirements
1.4.1.	Apply the reduce pattern for getting result array by one “reduce” method 
*/

let arr = [5, 2, 4, 3, 7];
function minMax(numbers) {
    let min = numbers.reduce((min,element) => min <= element ? min: element, ...[]);
    let max = numbers.reduce((max,element) => max >= element ? max: element, ...[]);
return [min,max];
}
console.log(`\nInput array : ${arr} // Output array : ${minMax(arr)}\n`) ;


/* 2.	Write function deleteWithPrefix(strings, prefix)
2.1.	Takes array of strings and a prefix value
 2.2.	Returns array containing the strings from the input array without strings starting with a given prefix
 2.3.	Example: deleteWithPrefix([“abc”, “old_abc”, “lmn”, “123”, “old_lmn”], “old_”) returns array [“abc”, “lmn”, “123”]
*/

let str = ["abc", "old_abc", "lmn", "123", "old_lmn", "old_"];
let prefix = 'old_';
function deleteWithPrefix(strings, prefix) {
  return strings.filter((elem, i) => strings.includes(prefix) ? strings.splice(i,1) : elem);
}
console.log(deleteWithPrefix(str,prefix));



// 3.	Write function getSortedEvenOdd(numbers)
// 3.1.	Takes array of numbers 
// 3.2.	Returns array sorted in the following order
// 3.2.1.	First numbers should be the even ones in the ascending order
// 3.2.2.	Last numbers should be the odd ones in the descending order
// 3.3.	The input array of numbers must not been updated
// 3.4.	Example: getSortedEvenOdd(numbers) returns new array with no update of “numbers”. 
//let numbers=[1,6,3,8,5,2,7,4] then being returned array will be [2, 4, 6, 8, 7, 5, 3, 1]

let numbers = [1, 6, 3, 8, 5, 2, 7, 4]
function getSortedEvenOdd(numbers) {
    let arrayCopy = numbers.slice();
    let arrSortEven = arrayCopy.filter((e) => e % 2 == 0).sort((e1, e2) => e1-e2)
    let arrSortOdd = arrayCopy.filter((e) => e % 2 != 0).sort((e1, e2) => e2-e1);
    return [arrSortEven,arrSortOdd];
}
console.log(`\n Input array: ${numbers} // Output array : ${getSortedEvenOdd(numbers)}\n`);