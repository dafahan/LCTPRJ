{// Timer

let time = document.getElementById("seconds");
let play = document.getElementById("start_button");
let reset_timer = document.getElementById("reset_timer");
let s10 = document.getElementById("s10");
let s5 = document.getElementById("s5");
let pause = document.getElementById("pause");
let set_timer = document.getElementById("set_timer");
let timer_box = document.getElementById("timer");
var timesUp_sound = new Audio("timeUp.mp3");
let count = 1000;
let interval;
let strTime;
let repeatSound,  soundCounter = 12;
//let isPause = false;

function timerStart(){
    interval = setInterval(() => {
        
        if (count > 0) {
            count--;
            strTime = count.toString();
          //  if(isPause)clearInterval(interval);
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
                time.style.background = "red";
                
                
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
}

function timerFinish(){
    clearInterval(interval);
    
}
function timerPrepare(){
   
    count = 1000;
    soundCounter = 12;
    interval;
    time.innerHTML = "10:00";
    time.style.background = "none";
}
// play.addEventListener("click", function () {
//     interval = setInterval(() => {
//         if (count > 0) {
//             count--;
//             strTime = count.toString();
            
//             if (count >= 10000) {
//                 time.innerHTML = strTime[0] + " : " + strTime[1] + strTime[2] + " : " + strTime[3] + strTime[4];
//             }
//             if (count >= 1000 && count < 10000) {
//                 time.innerHTML = strTime[0] + strTime[1] + " : " + strTime[2] + strTime[3];
//             }
//             if (count >= 100 && count < 1000) {
//                 time.innerHTML = "0" + strTime[0] + " : " + strTime[1] + strTime[2];
//             }
//             if (count < 100 && count >= 10) {
//                 time.innerHTML = "0 : " + strTime[0] + strTime[1];
//             }
//             if (count < 10) {
//                 time.innerHTML = "0 : 00" + strTime[0];
//             }
            
//             if (count == 0) {
//                 time.innerHTML = "Time's Up!";
//                 clearInterval(interval);
//                 timer_box.style.background = "red";
//                 play.style.background = "red";
//                 pause.style.background = "red";
//                 s10.style.background = "red";
//                 s5.style.background = "red";
                
//                 repeatSound = setInterval(() => {
//                     soundCounter--;
//                     timesUp_sound.play();
//                     if (soundCounter == 0) {
//                         clearInterval(repeatSound);
//                     }
//                 }, 100);
            
                
//             }
//         } else {
//             count = 1000;
//             soundCounter = 12;
//             interval;
//         }
//     }, 10);
// });



// s10.addEventListener("click", function() {
//     soundCounter = 12;
//     let a = 10;
//     count = a * 100;
//     seconds.innerHTML = a + " : 00";
// });

// s5.addEventListener("click", function() {
//     soundCounter = 12;
//     let a = 5;
//     count = a * 100;
//     seconds.innerHTML = "05 : 00";
// });

// pause.addEventListener("click", function() {
//     clearInterval(interval);
// });

// reset_timer.addEventListener("click", function() {
//     count = 1000;
//     soundCounter = 12;
//     time.innerHTML = "10 : 00";
//     clearInterval(interval);
//     timer_box.style.background = "white";
//     play.style.background = "white";
//     pause.style.background = "white";
//     s10.style.background = "white";
//     s5.style.background = "white";
//     clearInterval(interval);
// });
}