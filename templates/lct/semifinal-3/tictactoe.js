{// Team A

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

}

// const col = [A, B, C, D, E, F];

const team_opt = document.getElementsByName('team-opt')

const edit_switch = document.getElementById('flexSwitchCheckDefault')


function teamSelected(){
    return document.querySelector('input[name=team-opt]:checked').value;
}

edit_switch.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById('inlineRadio1').disabled = false;
    document.getElementById('inlineRadio2').disabled = false;
    document.getElementById('inlineRadio3').disabled = false;
    document.getElementById('inlineRadio4').disabled = false;
    document.getElementById('inlineRadio5').disabled = false;
    var blocks = document.getElementsByClassName('block')
    for(var i=0;i < blocks.length; i++){
        blocks[i].removeAttribute('href');
        blocks[i].removeAttribute('target');
        document.getElementById(blocks[i].id).setAttribute('onclick','changeBlock(this)')
    }
  } else {
    document.getElementById('inlineRadio1').disabled = true;
    document.getElementById('inlineRadio2').disabled = true;
    document.getElementById('inlineRadio3').disabled = true;
    document.getElementById('inlineRadio4').disabled = true;
    document.getElementById('inlineRadio5').disabled = true;
    var blocks = document.getElementsByClassName('block')
    for(var i=0;i < blocks.length; i++){
        blocks[i].href = 'soal/'+blocks[i].id+'.html';
        blocks[i].target = '_blank';
        blocks[i].removeAttribute('onclick');
    }
  }
});




function changeBlock(block){
    switch (teamSelected()) {
        case 'default':
            block.innerHTML = "<button class='btn-custom'>" + block.id.toUpperCase() + "</button>";
            break;
        case 'x':
            block.innerHTML = "<button class='btn-custom' style='background: black;'>" + teamSelected().toUpperCase() + "</button>";
            break;
        case 'a':
            block.innerHTML = "<button class='btn-custom' style='background: red;color: white;'>" + teamSelected().toUpperCase() + "</button>";
            
            break;
        case 'b':
            block.innerHTML = "<button class='btn-custom' style='background: blue;color: white;'>" + teamSelected().toUpperCase() + "</button>";
            break;
        case 'c':
            block.innerHTML = "<button class='btn-custom' style='background: yellow;'>" + teamSelected().toUpperCase() + "</button>";
            break;
        // edit_switch.checked = false;
        // edit_switch.dispatchEvent(new Event("change"));
    }
    
}

