/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
//var buttonFav = document.querySelectorAll('footer > button:first-of-type');
//var buttonLike = document.querySelectorAll('footer > button:last-of-type');
var aside = document.querySelector('aside');
var container = document.querySelector('div:first-of-type');
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
    
    } else {
        
       container.classList.remove('verstop'); 
       console.log(document.documentElement.scrollTop); 
       eerste.classList.add('verstop'); 
       aside.classList.remove('verstop');
       aside.classList.add('scrolldown'); 
    
    } if (document.documentElement.scrollTop >= 1400){
       
        eerste.classList.add('verstop');
        tweede.classList.remove('verstop');
        
    } else {
        
        tweede.classList.add('verstop');
        
    } if (document.documentElement.scrollTop >= 2500){
        
        tweede.classList.add('verstop');
        derde.classList.remove('verstop');
    
    } else {
        
        derde.classList.add('verstop');
        
    } if (document.documentElement.scrollTop >= 4400){
        
        derde.classList.add('verstop');
        vierde.classList.remove('verstop');
        
    } else {
        
        vierde.classList.add('verstop');
        
    }
}



window.addEventListener("scroll", myScroll1);