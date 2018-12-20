/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var eMailLog = document.querySelector('label');
var wwLog = document.querySelector('label[for=wachtwoord]');
var inputLog1 = document.querySelector('input:first-of-type');
var inputLog2 = document.getElementById("wachtwoord");

function mailCheck(){
    if (inputLog1.value == ""){
        eMailLog.classList.remove('blijfomhoog');
    }else {
        eMailLog.classList.add('blijfomhoog');
    }
}
function wwCheck(){
    if (inputLog2.value == ""){
        wwLog.classList.remove('blijfomhoog');
    }else {
        wwLog.classList.add('blijfomhoog');
    }
}

inputLog1.addEventListener("input", mailCheck);
inputLog2.addEventListener("input", wwCheck);