let slideIndex = 0;
let slideIndex2 = 0;
showSlides(slideIndex);
showSlides2(slideIndex2);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides.item(i).style.display = "none";
    }
    slides.item(slideIndex).style.display = "block";
}
//can we pretend that this code is well-written? that would be nice
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}
function showSlides2(n) {
    let slides2 = document.getElementsByClassName("slides2");
    if (n >= slides2.length) {
        slideIndex2 = 0;
    }
    else if (n < 0) {
        slideIndex2 = slides2.length - 1;
    }
    for (let i = 0; i < slides2.length; i++) {
        slides2.item(i).style.display = "none";
    }
    slides2.item(slideIndex2).style.display = "block";
}