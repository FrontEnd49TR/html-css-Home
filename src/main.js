import { ButtonsShow } from "./ui/ButtonsShow.js";
import { Library } from "./data/library.js";
import { LibraryForms } from "./ui/LibraryForms.js";

const ACTIVE = "active";

// *************************  library.js**********************
const library = new Library();


// **********************************************************
// *************************  Buttons Menu and Show Section ****** ButtonsShow.js ******************
const paramsButtonsShow = {
    sectionelement: "section",
    buttonElementClass: ".main-buttons-class *",    // " *" all buttons of the parent class
    active: ACTIVE                                  // class ".active" in css (illumination buttons)

};
const buttonsShow = new ButtonsShow(paramsButtonsShow);

// ***************************************************************************************
// ************************  Add books in the Library ****** LibraryForms.js********

const paramsLibraryForms = {
    idBookForm: "add-books-form-id",        //  my Form in Section 0 (index.html) / add books
    idPublishingDateInput: "date-input-id",
    idBookPages: "book-pages-id"
}
const libraryForm = new LibraryForms(paramsLibraryForms);
libraryForm.addSubmitHandler((book) => library.addBook(book));  // in LibraryForm.js started Submit() - (addSubmitHadler)
                                                                // with (book) which transmits Object from library.js - function addBook()


// const company = new Company();

// const paramsEmployeeForm = {
//     idForm: "employee_form", idDateInput: "date_input",
//     idSalaryInput: "salary_input", idDateError: "date_error", idSalaryError: "salary_error",
//     minYear: MIN_YEAR, minSalary: MIN_SALARY, maxSalary: MAX_SALARY
// }
// const employeeForm = new EmployeeForm(paramsEmployeeForm);
// employeeForm.addSubmitHandler((employee) => company.hireEmployee(employee))


// *************************************************************************************





// import { Library } from "./data/library.js";
// import { BookForm } from "./ui/BookForm.js";
// import { PagesForm } from "./ui/PagesForm.js";
// import { AuthorForm } from "./ui/AuthorForm.js";
// import { BooksList } from "./ui/BooksList.js";
// import { ButtonsMenu } from "./ui/ButtonsMenu.js";

// const MIN_PAGES = 50;
// const MAX_PAGES = 2000;
// const minDateString = '1980-01-01';
// const ACTIVE = "active"

// const listAllBooks = new BooksList("books-all");
// const listBooksByPages = new BooksList("books-pages");
// const listBookByAuthor = new BooksList("books-author");
// //======================================================

// const library = new Library();

// const paramsBookForm = {
//     idForm: "book_form", idPagesInput: "pages_input",
//     idDateInput: "date_input", idPagesError: "pages_error", idDateError: "date_error",
//     minPages: MIN_PAGES, maxPages: MAX_PAGES, minDate: new Date(minDateString),
//     cb: book => library.addBook(book)
// };
// const bookForm = new BookForm(paramsBookForm);
// //=====================================================================
// //functions of Pages Form

// const paramsPagesForm = {
//     idForm: "pages-form", idPageFromInput: "pageFrom",
//     idPageToInput: "pageTo", idErrorMessage: "pages_form_error",
//     cb: (pagesObj) => {
//         const books = library.getBooksbyPagesRange(pagesObj.pageFrom, pagesObj.pageTo);
//         listBooksByPages.showBooks(books);
//     }
// };
// const pagesForm = new PagesForm(paramsPagesForm);

// //=====================================================================================
// const paramsButtonMenu = {
//     keyWord: "section", buttonsMenu: ".buttons-menu *", active: ACTIVE,
//     cb1: () => {
//         const books = library.getAllBooks();
//         listAllBooks.showBooks(books);
//     }
// }
// const buttonsMenu = new ButtonsMenu(paramsButtonMenu);
// //=================================================
// // Functions of the Author form
// const paramsAuthorForm = {
//     idForm: "author-form", idAuthorInput: "author",
//     cb: author => {
//         const books = library.getBooksbyAuthor(author);
//         listBookByAuthor.showBooks(books);
//     }
// }
// const authorForm = new AuthorForm(paramsAuthorForm);




// ##################################################################################
// import { Company } from "./data/company.js";
// import { EmployeeForm } from "./ui/employeeForm.js";
// import { EmployeesList } from "./ui/EmployeesList.js";
// import { SalariesForm } from "./ui/SalariesForm.js";
// const MIN_SALARY = 1000;
// const MAX_SALARY = 40000;
// const MIN_YEAR = 1950;
// const ACTIVE = "active"

// const listAllEmployees = new EmployeesList("employees-all");
// const listEmployeesBySalary = new EmployeesList("employees-salary");
// const sectionsElement = document.querySelectorAll("section");
// const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
// /************************************************************************** */

// const company = new Company();

// const paramsEmployeeForm = {
//     idForm: "employee_form", idDateInput: "date_input",
//     idSalaryInput: "salary_input", idDateError: "date_error", idSalaryError: "salary_error",
//     minYear: MIN_YEAR, minSalary: MIN_SALARY, maxSalary: MAX_SALARY
// }
// const employeeForm = new EmployeeForm(paramsEmployeeForm);
// employeeForm.addSubmitHandler((employee) => company.hireEmployee(employee))
// /************************************************************* */

// /********************************************************************************** */
// const paramsSalaries = {
//     idForm: "salary-form", idSalaryFromInput: "salaryFrom",
//     idSalaryToInput: "salaryTo", idErrorMessage: "salary_form_error"
// }
// const salariesForm = new SalariesForm(paramsSalaries);
// salariesForm.addSubmitHandler((salariesObj) => {
//     const employees = company.getEmployeesBySalary(salariesObj.salaryFrom,
//         salariesObj.salaryTo);
//     listEmployeesBySalary.showEmployees(employees);

// })




// function showSection(index) {
//     buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
//     sectionsElement.forEach(e => e.hidden = true)
//     buttonsMenuElement[index].classList.add(ACTIVE);
//     sectionsElement[index].hidden = false;
//     if (index == 1) {
//         const employees = company.getAllEmployees();
//         listAllEmployees.showEmployees(employees)
//     }
// }



// window.showSection = showSection;
