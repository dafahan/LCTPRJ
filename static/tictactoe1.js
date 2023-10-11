let blocks = document.getElementsByClassName('block');
let scoreA = document.getElementById("scoreA");
let fieldA = document.getElementById("fieldA");
let addA = document.getElementById("addA");
let resetA = document.getElementById("resetA");
let scoreB = document.getElementById("scoreB");
let fieldB = document.getElementById("fieldB");
let addB = document.getElementById("addB");
let resetB = document.getElementById("resetB");
let scoreC = document.getElementById("scoreC");
let fieldC = document.getElementById("fieldC");
let addC = document.getElementById("addC");
let resetC = document.getElementById("resetC");
let scoreD = document.getElementById("scoreD");
let fieldD = document.getElementById("fieldD");
let addD = document.getElementById("addD");
let resetD = document.getElementById("resetD");
let bonusA = 0;
let bonusB = 0;
let bonusC = 0;
let bonusD = 0;
let storedScoreA = 0;
let storedScoreB = 0;
let storedScoreC = 0;
let storedScoreD = 0;
let tmpA = 0;
let tmpB = 0;
let tmpC = 0;
let tmpD = 0;
let matrix = [];
let turn = 0;
let sesi = 1;
const quizW = document.getElementById('wrongBtn');
const quizC = document.getElementById('correctBtn');
let boxQue = document.getElementById('que');
let boxAns = document.getElementById('ans');
let correct = 100;
let wrong = 50;
let cnt = 0;
let mode4 = false
{// Team A

    
    
    
    
        quizC.addEventListener("click",function(e){
            event.preventDefault();
            if(mode4)turn%=4;
            else turn%=3; 
            if((turn)==0){
                storedScoreA += correct;
                scoreA.innerHTML = storedScoreA;
                
            }
        })
        quizW.addEventListener("click",function(e){
            event.preventDefault();
            if(mode4)turn%=4;
            else turn%=3; 
            if((turn)==0){
                storedScoreA -= wrong;
                scoreA.innerHTML = storedScoreA;
                
            }
        })
    
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
}
{// Team B



        quizC.addEventListener("click",function(e){
            if(turn==1){
                storedScoreB += correct;
                scoreB.innerHTML = storedScoreB;
                event.preventDefault();
            }
        })
        quizW.addEventListener("click",function(e){
            if(turn==1){
                storedScoreB -= wrong;
                scoreB.innerHTML = storedScoreB;
                event.preventDefault();
            }
        })
    
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
}
{// Team C

let scoreC = document.getElementById("scoreC");
let fieldC = document.getElementById("fieldC");
let addC = document.getElementById("addC");
let resetC = document.getElementById("resetC");


        quizC.addEventListener("click",function(e){
            if(turn==2){
                storedScoreC += correct;
                scoreC.innerHTML = storedScoreC;
                event.preventDefault();
            }
        })
        quizW.addEventListener("click",function(e){
            if(turn==2){
                storedScoreC -= wrong;
                scoreC.innerHTML = storedScoreC;
                event.preventDefault();
            }
        })
    
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



}
{// Team D

    let scoreD = document.getElementById("scoreD");
    let fieldD = document.getElementById("fieldD");
    let addD = document.getElementById("addD");
    let resetD = document.getElementById("resetD");
    
    
            quizC.addEventListener("click",function(e){
                if(turn==3){
                    storedScoreD += correct;
                    scoreD.innerHTML = storedScoreD;
                    event.preventDefault();
                }
            })
            quizW.addEventListener("click",function(e){
                if(turn==3){
                    storedScoreD -= wrong;
                    scoreD.innerHTML = storedScoreD;
                    event.preventDefault();
                }
            })
        
    fieldD.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            if (fieldC.value == '') {
                storedScoreD += 0;
            } else {
                storedScoreCD+= parseInt(fieldD.value);
            }
            scoreD.innerHTML = storedScoreD;
            fieldD.value = '';
        }
    });
    
    resetD.addEventListener("click", function () {
        storedScoreD = 0;
        scoreD.innerHTML = storedScoreD;
    });
    
    
    
    }
    