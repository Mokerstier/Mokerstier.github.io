/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var klik = document.getElementById("klik");
var disabled = document.getElementById("zoek");
var checkBox = document.getElementsByClassName("check");
var buttonBewaar = document.querySelector('article>footer>button');

var loginLijstje = document.querySelector('body>header>ul');
var logIn = document.querySelector('.login');


var c = 0; //nummertje voor de checkbox[Array]


function showLijstje (){
    loginLijstje.classList.toggle('display');
}



function checked() {
    var isChecked = this.checked;
    
    if (isChecked){
       disabled.removeAttribute('disabled');
      disabled.classList.remove('inactive');
      disabled.classList.add('active'); 
    } else {
        disabled.classList.add('inactive');
        disabled.classList.remove('active');
        disabled.disabled = disabled;
    }
}
for (c = 0; c < checkBox.length; c++){
    checkBox[c].addEventListener("change", checked);
    }
// voegt de slider toe op het uitschuifbare zoekmenu - home -
function geKlik(){
    if ((klik.checked) === true){
        document.getElementById('leestijd').innerHTML = '<input type="text" id="sampleSlider"  />';
        console.log(document.getElementById('leestijd').innerHTML);
        var script = document.createElement('script');
   script.src = './js/rSlider.js';
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(script);
    }
}
// ===== Micro bewaren =====
function bewaar(){
    buttonBewaar.classList.toggle('bewaard');
}
logIn.addEventListener("click", showLijstje);


buttonBewaar.addEventListener("click", bewaar);
klik.addEventListener("click", geKlik);

//document.addEventListener('DOMContentLoaded', function (){
//    document.getElementById('leestijd').innerHTML = '<input type="text" id="sampleSlider"  />';
//});
//window.onscroll = function() {myScroll1();};
