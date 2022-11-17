const word = "apple";
N_LETTER = 5;
let attempt = 6;
const letterElements = document.querySelectorAll(".letter-guess");
const notification = document.querySelector(".notification-class");
notification.innerHTML = `You have ${attempt} attempts to guess the word`;
const final = document.querySelector(".final-class-winner");
const HIDDEN = "final-class-winner";
const inputClass = document.querySelector(".class-input");
const closeInput = "close-class-input";
const finalLost = "final-class-lost";

finalRemove();
function onChange(event) {
    const wordGuess = event.target.value;
     const wordGuessCopy = event.target.value;
    if (wordGuess.length != N_LETTER) {
        alert(` A word should contain ${N_LETTER} letters`);
    }else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
            const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);  // indexOf - if there is letter - return index letter in array - else return -1
            let res = `red`;
            if (index > -1) {
                res = l == word[i] ? 'green' : 'yellow';
            }
           return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color = c); 
        checkAttempt(wordGuessCopy);
    }
}

function checkAttempt(wordGuessCopy) {
     attempt = attempt - 1;
    if (word == wordGuessCopy) {
        inputClass.classList.add(closeInput);
        finalAdd();
        final.innerHTML = `Congratulations - you guessed the word in attempts`;
    } else if (attempt == 0){
        inputClass.classList.add(closeInput);
        finalAdd();
        final.classList.add(finalLost);
        final.innerHTML = `Sorry, your attempts to guess are over.`;
    }
        notification.innerHTML = `You have ${attempt} attempts to guess the word`;
    return wordGuessCopy;  
}

function finalAdd() {
    final.classList.add(HIDDEN);
}
function finalRemove() {
    final.classList.remove(HIDDEN);
}
