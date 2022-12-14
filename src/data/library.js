export class Library {
    constructor() {
        this.books = [];
    }
    hireEmployee(employee) {
        employee.pages = +employee.pages;
        this.books.push(employee);
    }
    getAllEmployees() {
        return this.books;
    }
    getEmployeesBySalary(salaryFrom, pageTo) {
        return this.books.filter(e => e.pages >= salaryFrom && e.pages < pageTo);
    }
}