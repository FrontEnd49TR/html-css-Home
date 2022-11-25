// 1.	Write function createRandomEmployees that creates array of a 
//     given number of the random Employee objects. The factory method createEmployee 
//     that creates one Employee object by the given parameters has been written at CW #19
//     https://github.com/Java49Telran/html-css-js-introduction/tree/js-objects 
// 1.1.	Takes following parameters
// 1.1.1.	nEmployees - Number of being created Employee objects
// 1.1.2.	idDigits – number of digits of an ID value, for example if idDigits equals 4, 
//         it means that the random ID values should be in the range [1000, 9999]
// 1.1.3.	minSalary – minimal salary value (a salary value that is less than minSalary cannot be)
// 1.1.4.	maxSalary – maximal salary value (a salary value that is greater than maxSalary cannot be)
// 1.2.	Returns array of the random Employee objects
// 1.3.	Implementation hints
// 1.3.1.	Runs nEmployees iterations
// 1.3.2.	In each iteration
// 1.3.2.1.	Gets random ID value as a number comprising of a given idDigits. 
//             Make sure that the generated value should be a unique on in the result array
// 1.3.2.2.	A name value is a string as the concatenation of “name” and ID value from #1.3.2.1
// 1.3.2.3.	Gets random salary value in the rang [manSalary, maxSalary]
// 1.3.2.4.	Calls the factory method createEmployee and a result of the call pushes in a result array
// 2.	Write function getAverageAge returning a value of the average age of the Employee object
// 2.1.	Takes one parameter as an array of Employee objects
// 2.2.	Returns an average value of all age values
// 2.3.	Implementation hints
// 2.3.1.	Apply “reduce”
// 2.3.2.	Age value is computed as new Date().getFullYear() - empl.birthYear, 
//         where new Date() returns Date object of the current date; 
//         method getFullYear returns year value; empl.birthYear -
//          value of the birthYear of the employee referred by the reference empl
// 3.	Write function getEmployeesBySalary returning a sorted by 
//         salary array of the Employee object having the salary value in a given range
// 3.1.	Takes three following parameters
// 3.1.1.	Array of the Employee objects
// 3.1.2.	salaryFrom – minimal salary in a given range
// 3.1.3.	salaryTo – maximal salary in a given range
// 3.2.	 Returns the sorted by salary array of the Employee objects having 
//         salary in the range [salaryFrom, salaryTo]
// 3.3.	Implementation hints:
// 3.3.1.	Apply “filter” and “sort”
// 4.	Write function increaseSalary increasing salary values of the Employee 
//         objects having salary less than a given value
// 4.1.	Takes three following parameters
// 4.1.1.	Array of the Employee objects
// 4.1.2.	borderSalary – salary value, the Employee objects having salary less 
//         which, will have a greater salary
// 4.1.3.	percent  - percent value, on which the salary values of the being 
//         found Employee objects should be increased, for example
// 4.1.4.	Example, borderSalary = 8000, percent = 10, Employee objects having salary
//          less than 8000 will have on 10% greater salary, for example an employee has 
//          salary 6000 after performing that function that employee will have salary 6600
// 4.1.5.	Implementation hints
// 4.1.5.1.	Apply “filter” and “map”

//  Eugene Kuzenko

const nEmployees = 5;
const idDigits = 4;
const minSalary = 5000;
const maxSalary = 10000;
const salaryFrom = 6000;
const payTo = 9000;

const employees = [];
let employee = createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary);
getAge();
prn(employee);

console.log("Sort by Salary : ",getEmployeesBySalary(employee));
 
function createEmployee(nameID, salary, birthday,age) {
    return {nameID, salary, birthday,age};
}

function getBirthdayEmployee() {
    const ageMax = new Date().getFullYear()-17;
    const ageMin = new Date().getFullYear()-67;
    return  Math.floor(Math.random() * (ageMax - ageMin) + ageMin);
}   

function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary ) {
              for (let num = 1; num <= nEmployees; num++) {
                const nameID = 'Name' + digitsID(idDigits);
                const salary = salaryRandom(minSalary, maxSalary);
                const birthday = getBirthdayEmployee();
                employees[num] = createEmployee(nameID, salary, birthday);
           }
   return employees;
}

function prn(employee) {
        console.log();
    for (let i = 1; i <= nEmployees; i++){
console.log(`${i}. Name: ${employee[i].nameID} / Salary: ${employee[i].salary} / Birthday: ${employee[i].birthday} / Age: ${employee[i].age}`);
      }
       console.log();
       console.log(`Average age of employees : ${getAverageAge(employee)} years\n`);
}

function digitsID(idDigits) {
    let min = 1;
    for(let i = min; i < idDigits; i++) {
    min *= 10;
    }
    let max = min*10;
  return Math.floor(Math.random() * (max-min) + min);
}

function salaryRandom(minSalary, maxSalary) {
    return Math.floor(Math.random() * (maxSalary-minSalary) + minSalary);
}

function getAge() {
     for ( i = 1; i <= nEmployees; i++) {
         employee[i].age = new Date().getFullYear() - employee[i].birthday;
     }
}   

function getAverageAge(employee) {
  return Object.values(employee).reduce((sum, {age}) => sum + age, 0) / nEmployees;
}

function getEmployeesBySalary(employee,salaryFrom,payTo) {
    // Filter ....
       const bySalary = employee.slice();
    return bySalary.sort(function(a,b) {
    return a.salary - b.salary;
});
}

