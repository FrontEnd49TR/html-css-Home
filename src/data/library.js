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
        return this.books.filter(b => b.numberOfThePages >= pagesFrom && b.numberOfThePages < pagesTo);
    }
}
