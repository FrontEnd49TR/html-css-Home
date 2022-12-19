export class Library {
    constructor() {
        this.books = [];
    }
  
    addBook(book) {     
        this.books.push(book);  
    }
    getAllBooks() {}
    getAuthorBooks(author) {}
    getBooksByPages(pagesFrom, pagesTo) {}

}

// export class Company {
//     constructor() {
//         this.employees = [];
//     }
//     hireEmployee(employee) {
//         employee.salary = +employee.salary;
//         this.employees.push(employee);
//     }
//     getAllEmployees() {
//         return this.employees;
//     }
//     getEmployeesBySalary(salaryFrom, salaryTo) {
//         return this.employees.filter(e => e.salary >= salaryFrom && e.salary < salaryTo);
//     }
// }