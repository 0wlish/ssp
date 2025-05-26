let slideIndex = 0;
showSlides(slideIndex);

function dropdown(week) {
    if (document.getElementById("week" + week).style.display == "block") {
        document.getElementById("week" + week).style.display = "none";
    }
    else {
        document.getElementById("week" + week).style.display = "block";
    }
}

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