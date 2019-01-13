/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var carouselBox = document.querySelector('.carous');
var slideIndex = 1;
var slides = document.querySelectorAll('.carous article');
var millis = 5000;
var delay;
var dots = document.querySelectorAll('.dot');

function carousel(){
    var i;
    
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
        
    }
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", " inactive");
      
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.remove('inactive');
}
function nextSlide(){
    carousel();
    slideIndex++;
}
function currentSlide(n) {
    clearInterval(delay);
    slideIndex = n + 1;
    nextSlide();
    delay = setInterval(nextSlide, millis);
  }
function pauseCaro(){
    clearInterval(delay, millis);
    
}

function startSlides(){
    pauseCaro();
    nextSlide();
    delay = setInterval(nextSlide, millis);
}

startSlides();

dots.forEach(function (dots, index){
    dots.addEventListener("click", function(){
     console.log(dots + index);
        currentSlide(index);
    });
});

carouselBox.addEventListener("mouseenter", pauseCaro);
carouselBox.addEventListener("mouseleave", startSlides);