/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var klik = document.getElementById("klik");
var disabled = document.getElementById("zoek");
 
var checkBox1 = document.getElementsByClassName('check')[0];
var checkBox2 = document.getElementsByClassName('check')[1];
var checkBox3 = document.getElementsByClassName('check')[2];
var checkBox4 = document.getElementsByClassName('check')[3];
var checkBox5 = document.getElementsByClassName('check')[4];
var checkBox6 = document.getElementsByClassName('check')[5];

function enable() {
  // Get the checkbox
  //var checkBox = document.getElementsByClassName("check");
  // Get the output text
  console.log(checkBox1);

  if (((((((checkBox1.checked)||(checkBox2.checked))||(checkBox3.checked))||(checkBox4.checked))||(checkBox5.checked))||(checkBox6.checked)) == true){
    disabled.removeAttribute('disabled');
    disabled.classList.remove('inactive');
    disabled.classList.add('active');
} else{
    disabled.classList.add('inactive');
    disabled.classList.remove('active');
    disabled.disabled = disabled;
}
}

function geKlik(){
    if ((klik.checked) == true){
        document.getElementById('leestijd').innerHTML =('<input type="text" id="sampleSlider" />');
        console.log(document.getElementById('leestijd').innerHTML);
        var script = document.createElement('script');
   script.src = '/js/rSlider.js';
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(script);
    }
}

