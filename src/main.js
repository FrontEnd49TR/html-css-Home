import { Library } from "./data/library.js";
import { EmployeeForm } from "./ui/employeeForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";

const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;


const ACTIVE = "active"




const salaryFormErrorElement = document.getElementById("salary_form_error");
const employeesListElement = document.getElementById("books-all");
const employeesSalaryListElement = document.getElementById("books-pages");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */
//functions of Company


const library = new Library();
//functions of Employee Form




const employeeForm = new EmployeeForm({idForm: "book_form", idDateInput: "date_input",
idPagesInput: "pages_input", idDateError: "date_error", idSalaryError: "pages_error",
 minYear: MIN_YEAR, minSalary: MIN_SALARY, maxSalary: MAX_SALARY})
 employeeForm.addSubmitHandler((employee) => library.hireEmployee(employee))
/************************************************************* */

/********************************************************************************** */

//functions of Salary Form

let pageFrom = 0;
let pageTo = 0;
function onSubmitSalary(event) {
    event.preventDefault();
    const books = library.getEmployeesBySalary(pageFrom, pageTo);
    employeesSalaryListElement.innerHTML = getEmployeeItems(books);


   
}
function onChangeSalaryFrom(event) {
    const value = +event.target.value;
    if (pageTo && value >= pageTo) {
        showErrorMessage(event.target, "Salary 'from' must be less than Salary 'to'",
        salaryFormErrorElement);
    } else {
        salaryFrom = value;
    }
}
function onChangeSalaryTo(event) {
    const value = +event.target.value;
    if (salaryFrom && value < salaryFrom) {
        showErrorMessage(event.target, "Salary 'To' must be greater than Salary 'From'",
        salaryFormErrorElement);
    }
    pageTo = value;
}
function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllEmployees();
        employeesListElement.innerHTML = getEmployeeItems(books);
    }
}
function getEmployeeItems(books) {
    return books.map (e => 
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Name: ${e.employee_name} </p>
                 <p class="books-item-paragraph">Email: ${e.email} </p>
                 <p class="books-item-paragraph">Department: ${e.department}</p>
                 <p class="books-item-paragraph">Bithdate: ${e.birthDate}</p>
                 <p class="books-item-paragraph">Salary: ${e.pages}</p>
              </div>
          </li>`).join('');
}


window.showSection = showSection;
window.onChangeSalaryTo = onChangeSalaryTo;
window.onChangeSalaryFrom = onChangeSalaryFrom
window.onSubmitSalary = onSubmitSalary