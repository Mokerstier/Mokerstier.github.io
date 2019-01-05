/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var klik = document.getElementById("klik");
var disabled = document.getElementById("zoek");
var checkBox = document.getElementsByClassName("check");
var buttonBewaar = [].slice.call(document.querySelectorAll('article>button'));

var loginLijstje = document.querySelector('body>header>ul');
var logIn = document.querySelector('.login');

var header = document.querySelector('body>header');
var vorigeScrollpos = window.pageYOffset;
var c = 0; //nummertje voor de checkbox[Array]
var displayTime;
var hideTime;


function showLijstje (){
    loginLijstje.classList.toggle('display');
}

window.onscroll = function showHeader(){
    var huidgeScrollPos = window.pageYOffset;
    if (vorigeScrollpos > huidgeScrollPos) {
         header.className = ('');
    } else {
         header.className = ('header-up'); 
}
    vorigeScrollpos = huidgeScrollPos;
};

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
// checkt de checkbox
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
//function display(){ // Laat lijstje en header zien
//    loginLijstje.classList.add('display');
//    header.classList.add('bewaren');
//}
//function hide(){ // Haalt lijstje en header weer weg
//    loginLijstje.classList.remove('display');
//    header.classList.remove('bewaren');
//}


buttonBewaar.forEach(function (buttonBewaar, index){
    buttonBewaar.addEventListener("click", function(){
    console.log("je klikt button nummer " +index + "!");
        
    if (buttonBewaar.classList == ('bewaard') == true){
        clearTimeout(displayTime);// als de gebruiker 2 keer achter elkaar klikt op de button wordt de animatie van toevoegen niet gestart
        buttonBewaar.classList.remove('bewaard'); // haalt 'bewaard' class weg
        
    } else {
    displayTime = setTimeout(function(){ // Laat lijstje en header zien
    loginLijstje.classList.add('display');
    header.classList.add('bewaren');
}, 1000);
    hideTime =  setTimeout(function(){ // Haalt lijstje en header weer weg
    loginLijstje.classList.remove('display');
    header.classList.remove('bewaren');
}, 3000);
    displayTime; // Activeerd display functie na 1 sec
    hideTime; // Activeerd hide functie na 3 sec
    buttonBewaar.classList.add('bewaard');  // geeft de button class 'bewaard'  
    }    
});
});



logIn.addEventListener("click", showLijstje);


klik.addEventListener("click", geKlik);

//document.addEventListener('DOMContentLoaded', function (){
//    document.getElementById('leestijd').innerHTML = '<input type="text" id="sampleSlider"  />';
//});
//window.onscroll = function() {myScroll1();};
