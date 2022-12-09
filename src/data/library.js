export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.numberOfThePages = +book.numberOfThePages;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getAuthorBooks(author) {
        return this.books.filter(b => b.authorBook == author);
    }
    getBooksByPages(pagesFrom, pagesTo) {
        return this.books.filter(b => b.pages >= pagesFrom && b.pages < pagesTo);
    }
}




// constructor() {
//     this.employees = [];
// }

// hireEmployee(employee) {
//     employee.salary = +employee.salary;
//     this.employees.push(employee);
// }

// getAllEmployees() {
//     return this.employees;
// }

// getEmployeesBySalary(salaryFrom, salaryTo) {
//     return this.employees.filter(e => e.salary >= salaryFrom && e.salary < salaryTo);
// }