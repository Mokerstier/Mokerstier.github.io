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
var downloadButton = [].slice.call(document.querySelectorAll('article>footer>ul>li:first-of-type>button'));
var bewaardeVerhalen = document.getElementById('bewaarCount');
var gedownloadeVerhalen = document.getElementById('downloadCount');
var aantalBewaard = 0; //variabele voor aantal bewaarde verhalen
var aantalDownload = 0;
var duimErbij = [].slice.call(document.querySelectorAll('article li:last-of-type button'));
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
    zoekForm.parentElement.parentElement.children[2,3,4,5,6].classList.toggle('hide');
}
// Zoekveld verbergen
function hideForm(){
    zoekForm.classList.remove('showform');
    zoekForm.classList.toggle('index');
    sectionDirect.classList.remove('hide');
    sectionArticle.classList.remove('hide');
    terugButton.classList.remove('showterug');
    zoekForm.parentElement.parentElement.children[2,3,4,5,6].classList.toggle('hide');
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
                

            }, 2000);
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
        
        if (downloadButton.classList.contains('inactive' )  === true){
            aantalDownload--;
            gedownloadeVerhalen.innerHTML = aantalDownload;
            downloadButton.innerHTML = 'Download';
            downloadButton.classList.add('active');
            clearTimeout(displayTime);
            
            downloadButton.classList.remove('inactive');
            bolletje();
        // } else if(downloadButton.classList.contains('download' )  === true){
        //     downloadButton.classList.toggle('download') ;
        //     downloadButton.innerHTML = 'Download';
        //     downloadButton.classList.add('active');
        //     gedownloadeVerhalen.innerHTML = aantalDownload--;

        } else {
        downloadButton.classList.add('download');
        
        console.log("je klikt downloadbutton nummer " + index + "!");
        aantalDownload++;
        gedownloadeVerhalen.innerHTML = aantalDownload;
        downloadButton.innerHTML = '';
        setTimeout(function(){
           bolletje(4500); 
            downloadButton.classList.remove('download', 'active',);
            downloadButton.innerHTML = 'Gedownload';
            
            downloadButton.classList.add('inactive');
        }, 4500);
        }
    });
});

duimErbij.forEach(function (duimErbij){
    duimErbij.addEventListener("click", function(){
        if (duimErbij.classList.contains('leuk') == false){
        duimErbij.classList.add('leuk');
        duimErbij.classList.toggle('active');
        duimErbij.classList.toggle('inactive');
        duimErbij.innerHTML++;
    }else{
        duimErbij.classList.remove('leuk');
        duimErbij.innerHTML--;
        duimErbij.classList.toggle('active');
        duimErbij.classList.toggle('inactive');
    }
    });
    
});

(function() {

    if (document.getElementById('flying-focus')) return;
    
    var flyingFocus = document.createElement('flying-focus'); // use uniq element name to decrease the chances of a conflict with website styles
    flyingFocus.id = 'flying-focus';
    document.body.appendChild(flyingFocus);
    
    var DURATION = 100;
    flyingFocus.style.transitionDuration = flyingFocus.style.WebkitTransitionDuration = DURATION / 1000 + 's';
    
    function offsetOf(elem) {
        var rect = elem.getBoundingClientRect();
        var docElem = document.documentElement;
        var win = document.defaultView;
        var body = document.body;
    
        var clientTop  = docElem.clientTop  || body.clientTop  || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop,
            scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft,
            top  = rect.top  + scrollTop  - clientTop,
            left = rect.left + scrollLeft - clientLeft;
    
        return {top: top, left: left};
    }
    
    var movingId = 0;
    var prevFocused = null;
    var isFirstFocus = true;
    var keyDownTime = 0;
    
    document.documentElement.addEventListener('keydown', function(event) {
        var code = event.which;
        // Show animation only upon Tab or Arrow keys press.
        if (code === 9 || (code > 36 && code < 41)) {
            keyDownTime = now();
        }
    }, false);
    
    document.documentElement.addEventListener('focus', function(event) {
        var target = event.target;
        if (target.id === 'flying-focus') {
            return;
        }
        var offset = offsetOf(target);
        flyingFocus.style.left = offset.left + 'px';
        flyingFocus.style.top = offset.top + 'px';
        flyingFocus.style.width = target.offsetWidth + 'px';
        flyingFocus.style.height = target.offsetHeight + 'px';
    
        // Would be nice to use:
        //
        //   flyingFocus.style['outline-offset'] = getComputedStyle(target, null)['outline-offset']
        //
        // but it always '0px' in WebKit and Blink for some reason :(
    
        if (isFirstFocus) {
            isFirstFocus = false;
            return;
        }
    
        if (now() - keyDownTime > 42) {
            return;
        }
    
        onEnd();
        target.classList.add('flying-focus_target');
        flyingFocus.classList.add('flying-focus_visible');
        prevFocused = target;
        movingId = setTimeout(onEnd, DURATION);
    }, true);
    
    document.documentElement.addEventListener('blur', function() {
        onEnd();
    }, true);
    
    
    function onEnd() {
        if (!movingId) {
            return;
        }
        clearTimeout(movingId);
        movingId = 0;
        flyingFocus.classList.remove('flying-focus_visible');
        prevFocused.classList.remove('flying-focus_target');
        prevFocused = null;
    }
    
    function now() {
        return new Date().valueOf();
    }
    
    
    var style = document.createElement('style');
    style.textContent = "#flying-focus {\
        position: absolute;\
        margin: 0;\
        background: transparent;\
        -webkit-transition-property: left, top, width, height, opacity;\
        transition-property: left, top, width, height, opacity;\
        -webkit-transition-timing-function: cubic-bezier(0, 0.2, 0, 1);\
        transition-timing-function: cubic-bezier(0, 0.2, 0, 1);\
        visibility: hidden;\
        pointer-events: none;\
        box-shadow: 0 0 2px 3px #78aeda, 0 0 2px #78aeda inset; border-radius: 2px;\
    }\
    #flying-focus.flying-focus_visible {\
        visibility: visible;\
        z-index: 9999;\
    }\
    .flying-focus_target {\
        outline: none !important; /* Doesn't work in Firefox :( */\
    }\
    /* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */\
    .flying-focus_target::-moz-focus-inner {\
        border: 0 !important;\
    }\
    /* Replace it with @supports rule when browsers catch up */\
    @media screen and (-webkit-min-device-pixel-ratio: 0) {\
        #flying-focus {\
            box-shadow: none;\
            outline: 5px auto -webkit-focus-ring-color;\
            outline-offset: -3px;\
        }\
    }\
    ";
    document.body.appendChild(style);
    
    })();

logIn.addEventListener("click", showLijstje);
formButton.addEventListener("click", showForm);
terugButton.addEventListener("click", hideForm);


