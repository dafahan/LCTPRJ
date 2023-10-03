// Team A

let scoreA = document.getElementById("scoreA");
let fieldA = document.getElementById("fieldA");
let addA = document.getElementById("addA");
let resetA = document.getElementById("resetA");

let storedScoreA = 0;

fieldA.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (fieldA.value == '') {
            storedScoreA += 0;
        } else {
            storedScoreA += parseInt(fieldA.value);
        }
        
        scoreA.innerHTML = storedScoreA;
        fieldA.value = '';
        event.preventDefault();
    }
});


resetA.addEventListener("click", function () {
    storedScoreA = 0;
    scoreA.innerHTML = storedScoreA;
});

// Team B

let scoreB = document.getElementById("scoreB");
let fieldB = document.getElementById("fieldB");
let addB = document.getElementById("addB");
let resetB = document.getElementById("resetB");

let storedScoreB = 0;

fieldB.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (fieldB.value == '') {
            storedScoreB += 0;
        } else {
            storedScoreB += parseInt(fieldB.value);
        }
        
        scoreB.innerHTML = storedScoreB;
        fieldB.value = '';
        event.preventDefault();
    }
});

resetB.addEventListener("click", function () {
    storedScoreB = 0;
    scoreB.innerHTML = storedScoreB;
});

// Team C

let scoreC = document.getElementById("scoreC");
let fieldC = document.getElementById("fieldC");
let addC = document.getElementById("addC");
let resetC = document.getElementById("resetC");

let storedScoreC = 0;

fieldC.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (fieldC.value == '') {
            storedScoreC += 0;
        } else {
            storedScoreC += parseInt(fieldC.value);
        }
        scoreC.innerHTML = storedScoreC;
        fieldC.value = '';
    }
});

resetC.addEventListener("click", function () {
    storedScoreC = 0;
    scoreC.innerHTML = storedScoreC;
});

// Team D

let scoreD = document.getElementById("scoreD");
let fieldD = document.getElementById("fieldD");
let addD = document.getElementById("addD");
let resetD = document.getElementById("resetD");

let storedScoreD = 0;

fieldD.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (fieldD.value == '') {
            storedScoreD += 0;
        } else {
            storedScoreD += parseInt(fieldD.value);
        }
        scoreD.innerHTML = storedScoreD;
        fieldD.value = '';
    }
});

resetD.addEventListener("click", function () {
    storedScoreD = 0;
    scoreD.innerHTML = storedScoreD;
});

// Timer

let time = document.getElementById("seconds");
let play = document.getElementById("start_button");
let reset_timer = document.getElementById("reset_timer");
let pause = document.getElementById("pause");
let set_timer = document.getElementById("set_timer");
let timer_box = document.getElementById("timer");
var timesUp_sound = new Audio("timeUp.mp3");
let count = 1000;
let interval;
let strTime;
let repeatSound,  soundCounter = 12;

play.addEventListener("click", function () {
    interval = setInterval(() => {
        if (count > 0) {
            count--;
            strTime = count.toString();
            
            if (count >= 10000) {
                time.innerHTML = strTime[0] + " : " + strTime[1] + strTime[2] + " : " + strTime[3] + strTime[4];
            }
            if (count >= 1000 && count < 10000) {
                time.innerHTML = strTime[0] + strTime[1] + " : " + strTime[2] + strTime[3];
            }
            if (count >= 100 && count < 1000) {
                time.innerHTML = "0" + strTime[0] + " : " + strTime[1] + strTime[2];
            }
            if (count < 100 && count >= 10) {
                time.innerHTML = "0 : " + strTime[0] + strTime[1];
            }
            if (count < 10) {
                time.innerHTML = "0 : 00" + strTime[0];
            }
            
            if (count == 0) {
                time.innerHTML = "Time's Up!";
                clearInterval(interval);
                timer_box.style.background = "red";
                play.style.background = "red";
                pause.style.background = "red";
                
                repeatSound = setInterval(() => {
                    soundCounter--;
                    timesUp_sound.play();
                    if (soundCounter == 0) {
                        clearInterval(repeatSound);
                    }
                }, 100);
            
                
            }
        } else {
            count = 1000;
            soundCounter = 12;
            interval;
        }
    }, 10);
});

set_timer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (set_timer.value == '') {
            soundCounter = 12;
            count = 1000;
            seconds.innerHTML = count;
        } else {
            soundCounter = 12;
            let a = parseInt(set_timer.value);
            count = a * 100;
            seconds.innerHTML = a + " : 00";
        }
        set_timer.value = '';
    }
});

pause.addEventListener("click", function() {
    clearInterval(interval);
});

reset_timer.addEventListener("click", function() {
    count = 1000;
    soundCounter = 12;
    time.innerHTML = "10 : 00";
    clearInterval(interval);
    timer_box.style.background = "white";
    play.style.background = "white";
    pause.style.background = "white";
    clearInterval(interval);
});