export class ButtonsShow {

#sectionElement;
#buttonElement;
#arraySectionElement;
#arrayButtonElement;
#active;

constructor(params) {
    this.#sectionElement = document.querySelectorAll(params.sectionelement);
    this.#buttonElement = document.querySelectorAll(params.buttonElementClass);
    this.#arrayButtonElement = Array.from(this.#buttonElement);
    this.#arraySectionElement = Array.from(this.#sectionElement);
    this.#active = params.active;
    this.onClickFun();
}
onClickFun() {
    this.#buttonElement.forEach(e => {
        e.onclick = () => {                                         //set the onclick function for each button
            const index = this.#arrayButtonElement.indexOf(e);      // get onclick value
            this.showSection(index);
        }
    })
}

showSection(index) {
    this.#buttonElement.forEach(e => e.classList.remove(this.#active));     //  remove the backlight(illumination) of all buttons 
    this.#sectionElement.forEach(e => e.hidden = true);
    this.#arrayButtonElement[index].classList.add(this.#active);            // add the backlight(illumination) of [index] button
    this.#arraySectionElement[index].hidden = false;
 
}
}



// export class ButtonsMenu {
//     #sectionsElement;
//     #buttonsMenuElement;
//     #buttonArray;
//     #sectionArray;
//     #active;
//     #Cb1;
//     constructor(params) {
//         this.#sectionsElement = document.querySelectorAll(params.keyWord);
//         this.#buttonsMenuElement = document.querySelectorAll(params.buttonsMenu);
//         this.#active = params.active;
//         this.#Cb1 = params.cb1;
//         this.#buttonArray = Array.from(this.#buttonsMenuElement);
//         this.#sectionArray = Array.from(this.#sectionsElement);
//         this.foo();
//     }
//    
//     showSection(index) {
//         this.#buttonsMenuElement.forEach(e => e.classList.remove(this.#active));
//         this.#sectionsElement.forEach(e => e.hidden = true)
//         this.#buttonArray[index].classList.add(this.#active);
//         this.#sectionArray[index].hidden = false;
//         if (index == 1) {
//             this.#Cb1();
//             // const books = library.getAllBooks();
//             // listAllBooks.showBooks(books);
//         }



