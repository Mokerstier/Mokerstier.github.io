/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var formButton = document.querySelector('section:nth-of-type(2)>button');
var zoekForm = document.querySelector('section>form');
var sectionArticle = document.querySelector('section:nth-of-type(3)');
var sectionDirect = document.querySelector('section:last-of-type');
var disabled = document.getElementById("zoek");
var checkBox = document.getElementsByClassName("check");
var loginLijstje = document.querySelector('body>header>ul');
var logIn = document.querySelector('.login');
var buttonBewaar = [].slice.call(document.querySelectorAll('article>button'));
var downloadButton = [].slice.call(document.querySelectorAll('article>footer>ul>li>button'));
var bewaardeVerhalen = document.getElementById('bewaarCount');
var gedownloadeVerhalen = document.getElementById('downloadCount');
var aantalBewaard = 0; //variabele voor aantal bewaarde verhalen
var aantalDownload = 0;
var header = document.querySelector('body>header');
var vorigeScrollpos = window.pageYOffset;
var c = 0; //nummertje voor de checkbox[Array]
var displayTime;
var hideTime;
var terugButton = document.querySelector('.terug');


function showLijstje() {
    loginLijstje.classList.toggle('display');
}

window.onscroll = function showHeader() {
    var huidgeScrollPos = window.pageYOffset;
    if (vorigeScrollpos > huidgeScrollPos) {
        header.className = ('');
    } else {
        header.className = ('header-up');
    }
    vorigeScrollpos = huidgeScrollPos;
};

function showForm(){
    zoekForm.classList.add('showform');
    zoekForm.classList.toggle('index');
    sectionDirect.classList.add('hide');
    sectionArticle.classList.add('hide');
    terugButton.classList.add('showterug');
    terugButton.classList.remove('hide');
}
function hideForm(){
    zoekForm.classList.remove('showform');
    zoekForm.classList.toggle('index');
    sectionDirect.classList.remove('hide');
    sectionArticle.classList.remove('hide');
    terugButton.classList.remove('showterug');
}
function checked() {
    
    var isChecked = this.checked;
    
    if (isChecked) {
        disabled.removeAttribute('disabled');
        disabled.classList.remove('inactive');
        disabled.classList.add('active');
    } else {
        disabled.classList.add('inactive');
        disabled.classList.remove('active');
        disabled.disabled = disabled;
    }
}
for (c = 0; c < checkBox.length; c++) {
    checkBox[c].addEventListener("change", checked);
}

// checkt de checkbox

// ===== Micro bewaren =====
//function display(){ // Laat lijstje en header zien
//    loginLijstje.classList.add('display');
//    header.classList.add('bewaren');
//}
//function hide(){ // Haalt lijstje en header weer weg
//    loginLijstje.classList.remove('display');
//    header.classList.remove('bewaren');
//}


buttonBewaar.forEach(function (buttonBewaar, index) {
    buttonBewaar.addEventListener("click", function () {
        console.log("je klikt button nummer " + index + "!");

        if (buttonBewaar.classList == ('bewaard') === true) {
            clearTimeout(displayTime); // als de gebruiker 2 keer achter elkaar klikt op de button wordt de animatie van toevoegen niet gestart
            aantalBewaard--;
            bewaardeVerhalen.innerHTML = aantalBewaard;
            buttonBewaar.classList.remove('bewaard'); // haalt 'bewaard' class weg

        } else {
            displayTime = setTimeout(function () { // Laat lijstje en header zien
                loginLijstje.classList.add('display');
                header.classList.add('bewaren');
                aantalBewaard++;
                console.log(aantalBewaard);

                console.log(bewaardeVerhalen);
                bewaardeVerhalen.innerHTML = aantalBewaard;

            }, 1000);
            hideTime = setTimeout(function () { // Haalt lijstje en header weer weg
                loginLijstje.classList.remove('display');
                header.classList.remove('bewaren');
            }, 3000);
            displayTime; // Activeerd display functie na 1 sec
            hideTime; // Activeerd hide functie na 3 sec
            buttonBewaar.classList.add('bewaard'); // geeft de button class 'bewaard'  
        }
    });
});
console.log(bewaardeVerhalen);

downloadButton.forEach(function (downloadButton, index) {
    downloadButton.addEventListener("click", function () {
        
        if (downloadButton.classList == ('download') === true){
            aantalDownload--;
            gedownloadeVerhalen.innerHTML = aantalDownload;
            
        } else {
        downloadButton.classList.add('download');
        console.log("je klikt downloadbutton nummer " + index + "!");
        aantalDownload++;
        gedownloadeVerhalen.innerHTML = aantalDownload;
        setTimeout(function(){
            downloadButton.classList.remove('download', 'active');
            downloadButton.innerHTML = 'Gedownload';
            
            downloadButton.classList.add('inactive');
        }, 5000);
        }
    });
});

formButton.addEventListener("click", showForm);
terugButton.addEventListener("click", hideForm);
logIn.addEventListener("click", showLijstje);



//document.addEventListener('DOMContentLoaded', function (){
//    document.getElementById('leestijd').innerHTML = '<input type="text" id="sampleSlider"  />';
//});
//window.onscroll = function() {myScroll1();};
