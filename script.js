let date = new Date;
let hours = 0;
let minutes = 0;
let seconds = 0;
let i = 0;
let i2 = 0;
function startTime() {
    seconds++;
    if (seconds > 59) {
        seconds = 0;
        minutes++;
        i = 0;
    }
    if (minutes  > 59) { 
        hours++;
        minutes = 0;
    }
    if (hours < 10 && i2 == 0) {
        hours = "0" + hours;
        i2 = 1;
    }
    if (minutes < 10 && i == 0) { 
        minutes = "0" + minutes;
        i = 1;
    }
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById ( "time"). innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout (startTime, 10);
}