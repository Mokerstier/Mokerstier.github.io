/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var klik = document.getElementById("klik");
var disabled = document.getElementById("zoek");
var checkBox = document.getElementsByClassName("check");

for (var i = 0; i < checkBox.length; i++){
    checkBox[i].addEventListener("change", checked);
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
// scroll effect voor verhaal//



klik.addEventListener("click", geKlik);
//window.onscroll = function() {myScroll1();};
