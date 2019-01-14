/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
// Sorteer functie bij resultaten pagina
var formButton = document.querySelector('section:nth-of-type(2)>button');
var zoekForm = document.querySelector('section>form');
var sectionArticle = document.querySelector('section:nth-of-type(3)');
var sectionDirect = document.querySelector('section:last-of-type');
var disabled = document.getElementById("zoek");
var checkBoxes = document.querySelectorAll(".check");
var loginLijstje = document.querySelector('body>header ul');
var logIn = document.querySelector('.login');
var buttonBewaar = [].slice.call(document.querySelectorAll('article>button'));
var downloadButton = [].slice.call(document.querySelectorAll('article>footer>ul>li>button'));
var bewaardeVerhalen = document.getElementById('bewaarCount');
var gedownloadeVerhalen = document.getElementById('downloadCount');
var aantalBewaard = 0; //variabele voor aantal bewaarde verhalen
var aantalDownload = 0;
var duimErbij = [].slice.call(document.querySelectorAll('article li:last-of-type'));
var header = document.querySelector('body>header');
var aBaDTotaal = document.querySelector('header>nav>div'); // bollletje voor de downloads en bewaar
//var vorigeScrollpos = window.pageYOffset;
var c = 0; //nummertje voor de checkboxes[Array]
var displayTime;
var hideTime;
var terugButton = document.querySelector('.terug');
 

function showLijstje() {
    loginLijstje.classList.toggle('display');
    aBaDTotaal.classList.remove('added');
}

//window.onscroll = function showHeader() {
//    var huidgeScrollPos = window.pageYOffset;
//    if (vorigeScrollpos > huidgeScrollPos) {
//        header.className = ('');
//    } else {
//        header.className = ('header-up');
//    }
//    vorigeScrollpos = huidgeScrollPos;
//};
// Zoekveld laten zien
function showForm(){
    zoekForm.classList.add('showform');
    zoekForm.classList.toggle('index');
    sectionDirect.classList.add('hide');
    sectionArticle.classList.add('hide');
    terugButton.classList.add('showterug');
    terugButton.classList.remove('hide');
}
// Zoekveld verbergen
function hideForm(){
    zoekForm.classList.remove('showform');
    zoekForm.classList.toggle('index');
    sectionDirect.classList.remove('hide');
    sectionArticle.classList.remove('hide');
    terugButton.classList.remove('showterug');
}

// Styling checkboxes en activeren zoekbutton
function checked() {
    var otherChecked = false;
    var isChecked = this.checked;
    
    checkBoxes.forEach(function(c){
        if (c.checked){
            otherChecked = true;
        }
    });
    
    if (isChecked || otherChecked) {
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
for (c = 0; c < checkBoxes.length; c++) {
    checkBoxes[c].addEventListener("change", checked);
}

function bolletje(){
    var aBaD = (aantalBewaard + aantalDownload);
    aBaDTotaal.innerHTML = aBaD;
    console.log(aBaDTotaal);
    if (aBaD < 1){
        aBaDTotaal.classList.remove('added');
    } else {
        aBaDTotaal.classList.add('added');
    }
}

// ===== Micro bewaren =====

buttonBewaar.forEach(function (buttonBewaar, index) {
    buttonBewaar.addEventListener("click", function () {
        console.log("je klikt button nummer " + index + "!"); 

        if (buttonBewaar.classList == ('bewaard') === true) {
            clearTimeout(displayTime); // als de gebruiker 2 keer achter elkaar klikt op de button wordt de animatie van toevoegen niet gestart
            aantalBewaard--;
            bewaardeVerhalen.innerHTML = aantalBewaard;
            bolletje();
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
               bolletje(); loginLijstje.classList.remove('display');
                header.classList.remove('bewaren');
            }, 3000);
            displayTime; // Activeerd display functie na 1 sec
            hideTime; // Activeerd hide functie na 3 sec
            
            buttonBewaar.classList.add('bewaard'); // geeft de button class 'bewaard'  
        }
    });
});
console.log(bewaardeVerhalen);
// Micro downloaden
downloadButton.forEach(function (downloadButton, index) {
    downloadButton.addEventListener("click", function () {
        
        if (downloadButton.classList.contains('inactive') === true){
            aantalDownload--;
            gedownloadeVerhalen.innerHTML = aantalDownload;
            downloadButton.innerHTML = 'Download';
            downloadButton.classList.add('active');
            downloadButton.classList.remove('inactive');
            bolletje();
        } else {
        downloadButton.classList.add('download');
        console.log("je klikt downloadbutton nummer " + index + "!");
        aantalDownload++;
        gedownloadeVerhalen.innerHTML = aantalDownload;
        downloadButton.innerHTML = '';
        setTimeout(function(){
           bolletje(); 
            downloadButton.classList.remove('download', 'active');
            downloadButton.innerHTML = 'Gedownload';
            
            downloadButton.classList.add('inactive');
        }, 5000);
        }
    });
});

duimErbij.forEach(function (duimErbij){
    duimErbij.addEventListener("click", function(){
        if (duimErbij.classList.contains('leuk') == false){
        duimErbij.classList.add('leuk');
        duimErbij.innerHTML++;
    }else{
        duimErbij.classList.remove('leuk');
        duimErbij.innerHTML--;
    }
    });
    
});


logIn.addEventListener("click", showLijstje);
formButton.addEventListener("click", showForm);
terugButton.addEventListener("click", hideForm);


