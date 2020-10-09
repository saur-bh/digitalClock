const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function rotateClock(){

    let date = new Date();

    let hrTime = date.getHours();
    let minTime = date.getMinutes();
    let secTime = date.getSeconds();

    let hrPos = (hrTime * 360 / 12) + minTime * 360 / 60 / 12;
    let minPos = (minTime * 360 / 60) + secTime * 360 / 60 / 60;
    let secPos = secTime * 360 / 60;

    HOURHAND.style.transform = "rotate(" + hrPos + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)"


}

let clockInterval = setInterval(rotateClock,1000);

clockInterval();

