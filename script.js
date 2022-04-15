let sec = 0;
let min = 0;


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
    document.getElementById("time").innerText = sec;
}