const inputElements = document.querySelectorAll(".form-class [name]");
const alertMessage = document.querySelector(".alert-class");

const minSalary = 1000;
const maxSalary = 40000;
const minBirthDay = 1950;
const maxBirthDay = new Date().getFullYear();

function onSubmit(event) {
    event.preventDefault();
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {})
    console.log(employee);
}
function onChangeSalary(event) {
    if (event.target.name == "salary") {
        if (+event.target.value < minSalary || +event.target.value > maxSalary) {
            event.target.value = '';
            messageAlertSalary();
            delayAlert();
        }
    }
}
function onChangeBirthday(event) {
    const arrYear = Array.from(event.target.value);
    arrYear.splice(4);
    const yearBirthDayEvent = Number(arrYear.join(''));
    if (event.target.name == "birthDate") {
        if (yearBirthDayEvent < minBirthDay || yearBirthDayEvent > maxBirthDay) {
            event.target.value = '';
            messageAlertBirthDay();
            delayAlert();
        }
    }
}

function messageAlertSalary() {
    return alertMessage.innerHTML = `<label>Your SALARY can only be between ${minSalary} to ${maxSalary}</label>`;
}
function messageAlertBirthDay() {
    return alertMessage.innerHTML = `<label>Your BIRTHDAY can only be between ${minBirthDay} to ${maxBirthDay} </label>`;
}
function delayAlert() {
    return setTimeout(function () { alertMessage.innerHTML = `` }, 5000);
}