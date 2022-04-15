let sec = 00;
let min = 00;


function start() {
    setInterval(watch, 1000);
}


function pause() {
    console.log("Iniciou");
}


function stop() {
    console.log("Iniciou");
}


function watch() {
    sec++;
    if(sec==60) {
        min++
        sec = 0
    }
    document.getElementById("time").innerText = min + ":" + sec;
}