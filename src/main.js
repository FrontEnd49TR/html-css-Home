import { Library } from "./data/library.js";
import { showErrorMessage } from "./ui/ErrorMessage.js";

//*****************   CONST  ********* */
const ACTIVE = "active";
const MIN_DATE = new Date('1980-01-01');
const MAX_DATE = new Date();
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const ERROR_CLASS = "error-class";
const TIME_DELAY = 5000;


/************  Button 0 ***************************************** */
//const buttonsMenuElement = document.querySelectorAll(".main-button-class");
const sectionsElement = document.querySelectorAll("section");
const inputElements = document.querySelectorAll(".library-form-class [name]");
// const errorElement = document.getElementById("date-error-id");
const messageError = document.querySelector(".error-massage-class");
const library = new Library();
//************************************************************************** */



//**************** button 1 (all Books) **************************************/

const booksListElement = document.getElementById("books-all-id");

//********************************************************************* */
// ***************button 2 (Search by author) *****************************

const elementsByAuthor = document.getElementById("books-by-author-id");
const inputAutor = document.querySelectorAll(".author_form-class [name]");

 const noBook = document.querySelector(".no-book-by-author-class");

//*********************************************************************** */
// **************  button 3 (books by Pages) ***************************

const inputPages = document.getElementById("search-by-pages-id");
const noPages = document.querySelector(".no-book-by-pages-class");
const elementsByPages = document.getElementById("books-by-pages-id");

// ********************************************************************


// *************   Page ADD books  **************************

function showSection(index) {
    // buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    // buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
}

function onSubmit(event) {
    event.preventDefault();
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {})
    console.log(book);
    library.addBook(book);
}
function onChange(event) {
    if (event.target.name == 'publishDate') {
        validatePublishDate(event.target);
    } else if (event.target.name == 'numberOfThePages') {
        validateNumberPages(event.target);
    }
    // } else if (event.target.name == 'from') {
    //     validateFromPage(event.target);
    // } else if (event.target.name == 'to') {
    //     validateToPage(event.target);
    // }
}
function validatePublishDate(element) {
    const valueDateInput = new Date(element.value);
    if (valueDateInput < MIN_DATE || valueDateInput > MAX_DATE) {

        const message = valueDateInput < MIN_DATE ? `Date must be ${MIN_DATE} or greater`
            : `Date must be  ${MAX_DATE} or less`;
        showErrorMessage(element, message, errorElement);
    }
}
function validateNumberPages(element) {
    const numPage = element.value;

    if (numPage < MIN_PAGES || numPage > MAX_PAGES) {
        const message = numPage < MIN_PAGES ? `Pages must be ${MIN_PAGES} or greater` : `Pages must be ${MAX_PAGES} or less`;
        showErrorMessage(element, message);
    }
}

// function showErrorMessage(element, message) {

//     messageError.innerHTML = message;

//     // element.classList.add(ERROR_CLASS);
//     setTimeout(function () {

//         // element.classList.remove(ERROR_CLASS);
//         //  dateErrorElement.innerHTML = '';
//         messageError.innerHTML = '';
//         element.value = ''
//     }, TIME_DELAY);


// }
/************************  Page All Books  ************************************* */

function getBookItems(books) {
    return books.map(b =>
        `<li class="books-item-list-main">
              <div class="book-item-container">
                 <p class="book-item-paragraph">Title: ${b.titleBook}</p>
                 <p class="book-item-paragraph">Author: ${b.authorBook}</p>
                 <p class="book-item-paragraph">Bublication: ${b.publishDate}</p>
                 <p class="book-item-paragraph">Genre: ${b.genreBook}</p>
                 <p class="book-item-paragraph">Pages: ${b.numberOfThePages}</p>
              </div>
          </li>`).join('');
}
// **********************  Page Search Books ***********************************

function onSubmitSearch(event) {
    event.preventDefault();
    // const author = Array.from(inputAutor)[0].value;
    const author = inputAutor[0].value;
     const authorBook = library.getAuthorBooks(author);
    validateBookBySearch(authorBook);
 
}

function validateBookBySearch(authorBook) {
 if (authorBook.length == 0)
     {elementsByAuthor.innerHTML = ''
               noBook.innerHTML = 'No books found by this author';
                        setTimeout(function() { noBook.innerHTML = ''},TIME_DELAY);
     } else
    {elementsByAuthor.innerHTML = getBookItems(authorBook);}
}


// ********************************   Page Search by Numper Pages *********************
let pagesFrom = 0;
let pagesTo = 0;

function onSubmitPages(event) {
event.preventDefault();
const pages = library.getBooksByPages(pagesFrom, pagesTo);
console.log("AAA",pages)

 elementsByPages.innerHTML = getBookItems(pages);

}


function onChangeFrom(event) {
    const value = +event.target.value;
    if (pagesTo && value >= pagesTo) {
        // showErrorMessage(event.target, "Salary 'from' must be less than Salary 'to'"/*,
        // salaryFormErrorElement*/);
        // validateBookBySearch1()
    } else {
        pagesFrom = value;
    }
}
function onChangeTo(event) {
    const value = +event.target.value;
    if (pagesFrom && value < pagesFrom) {
        showErrorMessage(event.target, "Salary 'To' must be greater than Salary 'From'"/*,
        salaryFormErrorElement*/);
    }
    pagesTo = value;
}

// function validateBookBySearch1(authorBook) {
//     if (authorBook.length == 0)
//         {elementsByAuthor.innerHTML = ''
//                   noBook.innerHTML = 'No books found by this author';
//                            setTimeout(function() { noBook.innerHTML = ''},TIME_DELAY);
//         } else
//        {elementsByAuthor.innerHTML = getBookItems(authorBook);}
//    }

// ****************************************************************************************


window.showSection = showSection;
window.onSubmit = onSubmit;
window.onChange = onChange;
window.onSubmitSearch = onSubmitSearch;
window.onSubmitPages = onSubmitPages;
window.onChangeTo = onChangeTo;
window.onChangeFrom = onChangeFrom;