import { Library } from "./data/library.js";
//import {Styles} from "./styles/library.css";


 const ACTIVE = "active";
const minDate = 1980;
const maxDate = new Date();


const buttonsMenuElement = document.querySelectorAll(".main-button-class");
const sectionsElement = document.querySelectorAll("section");


function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    // if (index == 1) {
    //     const employees = company.getAllEmployees();
    //     employeesListElement.innerHTML = getEmployeeItems(employees);
    // }



}

window.showSection = showSection;