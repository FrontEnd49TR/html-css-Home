
const question = ["Home pet", "House item", "Kind of transport"];
const homePet = ["cat", "dog", "bird", "rabbit", "chicken", "pig", "cow"];
const houseItem = ["table", "chair", "bed", "sofa", "lamp", "tv", "refrigerator"];
const kindOfTransport = ["bike", "motorcycle", "car", "skateboard", "scooter", "plane", "bus", "train"];
const sectionElement = document.querySelector(".word-guess");

let word = "";
sectionElement.innerHTML = getDivsElement();

N_LETTER = word.length;
let attempt = 0;
const letterElements = document.querySelectorAll(".letter-guess");

const notification = document.querySelector(".notification-class");
notification.innerHTML = `Make a try`;
const final = document.querySelector(".final-class-winner");
const HIDDEN = "final-class-winner";
const inputClass = document.querySelector(".class-input");
const closeInput = "close-class-input";
const finalLost = "final-class-lost";

const questionClass = document.querySelector(".question");
questionClass.innerHTML = `${quest} ?`;


finalRemove();
// function onChange(event) {
//      const wordGuess = event.target.value;
//      const wordGuessCopy = event.target.value;
//      checkAttempt(wordGuessCopy);
//     if (wordGuess.length != N_LETTER) {
//         alert(` A word should contain ${N_LETTER} letters`);
//     }else {
//         const wordAr = Array.from(wordGuess);
//         wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
//             const colors = wordAr.map((l, i) => {

//             let index = word.indexOf(l);  // indexOf - if there is letter - return index letter in array - else return -1
//             let res = `red`;
//             if (index > -1) {
//                 res = l == word[i] ? 'green' : 'yellow';
//             }
//            return res;
//         })
//         colors.forEach((c, i) => letterElements[i].style.color = c); 
//     }
// }

function onChange(event) {
    const wordGuess = event.target.value;
    const wordGuessCopy = event.target.value;
    checkAttempt(wordGuessCopy);
   if (wordGuess.length != N_LETTER) {
       alert(` A word should contain ${N_LETTER} letters`);
   }else {
       const wordAr = Array.from(wordGuess);
            const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);  
              if (index > -1) {
               res = l == word[i] ? letterElements[i].stylebackground ='white' : 'yellow'; // !!!!
        } 
        return res;
       })
       colors.forEach((c, i) => letterElements[i].style.color = c); 
    }
}

function checkAttempt(wordGuessCopy) {
     attempt = attempt + 1;
    if (word == wordGuessCopy) {
        inputClass.classList.add(closeInput);
        finalAdd();
        final.innerHTML = `Congratulations - you guessed the word`;
    } 
        notification.innerHTML = `you used ${attempt} attempts`;
    return wordGuessCopy;  
}

function finalAdd() {
    final.classList.add(HIDDEN);
}
function finalRemove() {
    final.classList.remove(HIDDEN);
}
function randomFun(arr) {
     let index = Math.floor(Math.random() * arr.length);
    return  arr[index];
}
function getDivsElement() {
    let arq = getArrAnswear();
    word = randomFun(arq);
     let aaa = Array.from(word.slice());
     let res = aaa.map(letter => `<div class="letter-guess">${letter}`);
     return res.join(`</div>`);
}
function getArrAnswear() {
     let resArr = [];
    quest = randomFun(question);
    indexQuest = question.indexOf(quest);
    if (indexQuest == 1) { 
        resArr = houseItem.slice();
    } else {
        if (indexQuest == 2) {
            resArr = kindOfTransport.slice(); 
        } else {
            if(indexQuest == 0) {
                resArr = homePet.slice();
            }
        }
     } 
 return resArr;
}
