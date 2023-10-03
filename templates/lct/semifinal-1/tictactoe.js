{// Team A

    let scoreA = document.getElementById("scoreA");
    let fieldA = document.getElementById("fieldA");
    let addA = document.getElementById("addA");
    let resetA = document.getElementById("resetA");
    
    let storedScoreA = 0;
    
    fieldA.addEventListener("keyup", function (event) {
        console.log(turn);
        console.log("AA");
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
}
{// Team C

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



