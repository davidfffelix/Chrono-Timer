const sec = 00;


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
    document.getElementById("time").innerText = sec
}