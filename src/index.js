console.log("Launching script"); /* debuger */
/* search for all anchors containing image and text */
const anchors = document.querySelectorAll(".thumbnails-anchor");

/* search for an image belonging to a specific anchor */
const detailsImage = document.querySelector(".details-image");

/* search for an title belonging to a specific anchor */
const detailsTitle = document.querySelector(".details-title");

/* the function of writing to a certain (needed) anchor the corresponding image and title */
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
}
/* pass (view) through all anchors
and record the desired picture and text, if you press the button mouse */
for(let i = 0; i < anchors.length; i++) {
    /* addEventListener - executes an unnamed function() when pressed click left mouse*/
    anchors[i].addEventListener("click", function() {
        console.log("event - click on", anchors[i]);  /* debuger */
        setDetails(anchors[i]); /* a function is executed for a specific anchor */
    }) 
}