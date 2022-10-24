console.log("Launching script"); /* debuger */
/* search for all anchors containing image and text */
const anchors = document.querySelectorAll(".thumbnails-anchor");

/* search for an image belonging to a specific anchor */
const detailsImage = document.querySelector(".details-image");

/* search for an title belonging to a specific anchor */
const detailsTitle = document.querySelector(".details-title");

/* access to .main-class */
const mainClass = document.querySelector(".main-class");

/* -pointer to-    .details-container */
const detailsContainer = document.querySelector(".details-container");

const detailsAudio = document.querySelector(".details-audio");

/* variable for .is-point class */
const IS_POINT="is-point";

/* variable for .hidden class  */
const HIDDEN = "hidden";

/* the function of writing to a certain (needed) anchor the corresponding image and title */
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
    detailsAudio.setAttribute('src', anchor.getAttribute('data-details-audio'));
}
/* pass (view) through all anchors
and record the desired picture and text, if you press the button mouse */
for(let i = 0; i < anchors.length; i++) {
    /* addEventListener - executes an unnamed function() when pressed click left mouse*/
    anchors[i].addEventListener("click", function() {
        console.log("event - click on", anchors[i]);  /* debuger */
        showDetails(); /*function call */
        setDetails(anchors[i]); /* a function is executed for a specific anchor */
    }) 
}
function showDetails() {
    mainClass.classList.remove(HIDDEN); /* remove the hidden class in the main class*/
    detailsContainer.classList.add(IS_POINT); /* add the .is-point in the .details-container (image smaller to point) */ 
    /* setTimeout(function,delay,argument1,argument2...) --- can only (func,delay) */
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT); /* remove the .is-point in the .details-container (image bigger) */ 
    }, 1) /* delay before start in millisecond */ 
}
function hideDetails() {
    mainClass.classList.add(HIDDEN); /* add class hidden in main class */
}