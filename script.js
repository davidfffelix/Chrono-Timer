let sec = 0;
let min = 0;
let hr = 0;
let interval;


function twoDigits(digit) {
    if(digit < 10) {
        return("0" + digit)
    }else {
        return(digit)
    }
}


function start() {
    watch()
    interval = setInterval(watch, 1000);
}


function pause() {
    clearInterval(interval);
}


function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById("time").innerText = "00:00:00";
}


function watch() {
    sec++;
    if(sec == 60) {
        min++
        sec = 0
        if(min == 60) {
            min = 0
            hr++
        }
    }
    document.getElementById("time").innerText = twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}