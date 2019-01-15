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
var buttonBewaar = document.querySelector('footer button:last-of-type');
var downloadVerhaal = document.querySelector('footer button:first-of-type');
var bewaardeVerhalen = document.getElementById('bewaarCount');
var gedownloadeVerhalen = document.getElementById('downloadCount');
var aantalBewaard = 0; //variabele voor aantal bewaarde verhalen
var aantalDownload = 0;

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
        
    } if (document.documentElement.scrollTop >= 2400){
        tweede.classList.remove('start');
        tweede.classList.add('verstop');
        derde.classList.remove('verstop');
        derde.classList.add('start');
    
    } else {
        derde.classList.remove('start');
        derde.classList.add('verstop');
        
    } if (document.documentElement.scrollTop >= 4000){
        derde.classList.remove('start');
        derde.classList.add('verstop');
        vierde.classList.remove('verstop');
        vierde.classList.add('start');
    } else {
        vierde.classList.remove('start');
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


    buttonBewaar.addEventListener("click", function () {
        console.log("je klikt button nummer "); 

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

console.log(bewaardeVerhalen);
// Micro downloaden

     function downLoad() {
        console.log("klikie");
        if (downloadVerhaal.classList.contains('inactive') === true){
            aantalDownload--;
            gedownloadeVerhalen.innerHTML = aantalDownload;
            downloadVerhaal.innerHTML = 'Download';
            downloadVerhaal.classList.add('active');
            downloadVerhaal.classList.remove('inactive');
            bolletje();
        } else {
            downloadVerhaal.classList.add('download');
        
        aantalDownload++;
        gedownloadeVerhalen.innerHTML = aantalDownload;
        downloadVerhaal.innerHTML = '';
        setTimeout(function(){
           bolletje(); 
           downloadVerhaal.classList.remove('download', 'active');
           downloadVerhaal.innerHTML = 'Gedownload';
            
           downloadVerhaal.classList.add('inactive');
        }, 5000);
        }
    }

downloadVerhaal.addEventListener("click", downLoad);

window.onscroll = function() {scrollIndicator();};

window.addEventListener("scroll", myScroll1);