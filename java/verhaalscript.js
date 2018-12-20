/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var buttonFav = document.querySelectorAll('footer > button:first-of-type');
var buttonLike = document.querySelectorAll('footer > button:last-of-type');
console.log(buttonFav);
console.log(buttonLike);
function myScroll1() {
    if ((document.body.scrollTop >= 20) || document.documentElement.scrollTop >= 20) {
       console.log(document.documentElement.scrollTop); document.getElementById("titel").className = "hide";
        document.getElementById("eerste").className = "";
    } else {
       console.log(document.documentElement.scrollTop); 
       document.getElementById("eerste").className = "hide"; 
       document.getElementById("tweede").className = "hide"; document.getElementById("titel").className = "";
    } if (document.documentElement.scrollTop >= 600){
       
       document.getElementById("titel").className = "ronder";
        document.getElementById("eerste").className = "hide"; 
        document.getElementById("tweede").className = "";
    } else {
        document.getElementById("tweede").className = "hide";
    }
}



window.addEventListener("scroll", myScroll1);