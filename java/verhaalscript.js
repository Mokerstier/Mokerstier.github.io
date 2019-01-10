/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
//var buttonFav = document.querySelectorAll('footer > button:first-of-type');
//var buttonLike = document.querySelectorAll('footer > button:last-of-type');
var aside = document.querySelector('aside');
var container = document.querySelector('body>div:first-of-type');
var prompt = document.querySelector('.prompt');
var eerste = document.getElementById("eerste");
var tweede = document.getElementById("tweede");
var derde = document.getElementById("derde");
var vierde = document.getElementById("vierde");

function myScroll1() {
         
    if ((document.body.scrollTop >= 20) || document.documentElement.scrollTop >= 20) {
        
        aside.classList.remove('scrolldown');
        aside.classList.add('verstop');
        container.classList.add('verstop');
       console.log(document.documentElement.scrollTop); 
        eerste.classList.remove('verstop');
        eerste.classList.add('start');
    } else {
        
       container.classList.remove('verstop'); 
       eerste.classList.remove('start');
       console.log(document.documentElement.scrollTop); 
       eerste.classList.add('verstop'); 
       aside.classList.remove('verstop');
       aside.classList.add('scrolldown'); 
    
    } if (document.documentElement.scrollTop >= 1400){
        eerste.classList.remove('start');
        eerste.classList.add('verstop');
        tweede.classList.remove('verstop');
        tweede.classList.add('start');
    } else {
        tweede.classList.remove('start');
        tweede.classList.add('verstop');
        
    } if (document.documentElement.scrollTop >= 2500){
        
        tweede.classList.add('verstop');
        derde.classList.remove('verstop');
    
    } else {
        derde.classList.remove('start');
        derde.classList.add('verstop');
        
    } if (document.documentElement.scrollTop >= 4400){
        
        derde.classList.add('verstop');
        vierde.classList.remove('verstop');
        
    } else {
        
        vierde.classList.add('verstop');
        
    }
}

function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
    if ((scrolled >= 45) && (scrolled <= 55)){
      prompt.classList.remove('verstop');  
    } else {
        prompt.classList.add('verstop');
    }
}

window.onscroll = function() {scrollIndicator();};

window.addEventListener("scroll", myScroll1);