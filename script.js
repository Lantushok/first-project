var sliderIndex = 1;
showSlides(sliderIndex);

function currentSlide(n) {
    showSlides(sliderIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    console.log(slides);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[sliderIndex - 1].style.display = "flex";
    dots[sliderIndex - 1].className += " active";
}