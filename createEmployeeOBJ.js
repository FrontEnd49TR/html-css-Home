//******************************************************** */
function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary };
}
//******************************************************** */

const empl1 = createEmployee(123, "Eugene", 1975, 30000);
const empl2 = createEmployee(456, "Galya", 1983, 20000);

console.log(empl1, "\n", empl2);

empl1.salary = 40000;
empl2['salary'] = 30000;

console.log(empl1, "\n", empl2);