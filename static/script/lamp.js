let filamentCount = 0;
let timeOut = 1000;
let light = null;
let filament = null;

function lampEffect(){
    lightExecuteOff();
    filamentExecuteOn();
    // lightExecuteOn(50000)
}

function filamentExecuteOn() {
    filament.style.display = "block"
    setTimeout(filamentExecuteOff, 10)
}

function filamentExecuteOff(){
    filament.style.display = "none"
    filamentCount++;
    switch (filamentCount){
        case 4: {timeOut = 200;break}
        case 8: {timeOut = 50;break}
        case 20: {timeOut = 800;break}
        case 22: {timeOut = 1;break}
        case 70: {timeOut = 1500;break}
        case 71: {timeOut = 1;break}
    }
    if (filamentCount===200){
        timeOut = 1000
        filamentCount = 0;
        lightExecuteOn(7000);
    }else{
        setTimeout(filamentExecuteOn, timeOut);
    }
}

function lightExecuteOn(timeOut) {
    light.style.display = "block";
    setTimeout(lampEffect, timeOut);
}

function lightExecuteOff() {
    light.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    light = document.getElementById("light");
    filament = document.getElementById("filament");
    lampEffect();
}, false);




