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
let quizW = document.getElementById('wrongBtn');
let quizC = document.getElementById('correctBtn');
let boxQue = document.getElementById('que');
let boxAns = document.getElementById('ans');
let correct = 100;
let wrong = 50;
let cnt = 0;
let curI = null;
let ch = ['A', 'B', 'C', 'D'];
let clr = ['red','blue','yellow','green'];

        let curJ = null;
        let tmp = []
        let mode4 = false;
        // Convert blocks to a 2D matrixay
        for (let i = 0; i < 6; i++) {
          let row = []
          let matrix2d = [];

          // Iterate over the child elements of each block
          for (let j = 0; j < 6; j++) {
            let matrix1d = [];
            row.push(blocks[cnt]);
            for(let x = 0; x <4 ; x++){
                matrix1d.push(-1);
            }
            matrix2d.push(matrix1d);
            cnt++;
          }
          matrix.push(matrix2d);
          tmp.push(row);
         
        }
        blocks = tmp;
for (let i = 0; i < 6; i++) {
            for(let j = 0; j<6; j++){
                blocks[i][j].addEventListener("dblclick",function(e){
                e.preventDefault();

                
                for(let x = 0;x<4;x++){
                    let op = matrix[i][j][x];
                    
                    let minus = 'storedScore'+ch[x]+'-=correct';
                    let plus = 'storedScore'+ch[x]+'+=wrong';
                    if(op==1){
                        eval(minus);
                    }
                    if(op==0){
                        eval(plus);
                    }
                    let upd = 'score'+ch[x]+'.innerHTML = storedScore'+ch[x];
                    eval(upd);
                    matrix[i][j][x] = -1;
                 }
                 /*
                if(op == 0){
                    storedScoreA -= correct;
                    scoreA.innerHTML = storedScoreA;
                }else if(op == 1){
                    storedScoreB -= correct;
                    scoreB.innerHTML = storedScoreB;
                }else if(op == 2){
                    storedScoreC -= correct;
                    scoreC.innerHTML = storedScoreC;   
                }else if(op == 3){
                    storedScoreD -= correct;
                    scoreD.innerHTML = storedScoreD;   
                }else if(op == 10){
                    storedScoreA += wrong;
                    scoreA.innerHTML = storedScoreA;
                }else if(op == 20){
                    storedScoreB += wrong;
                    scoreB.innerHTML = storedScoreB;
                }else if(op == 30){
                    storedScoreC += wrong;
                    scoreC.innerHTML = storedScoreC;   
                }else{
                    storedScoreD += wrong;
                    scoreD.innerHTML = storedScoreD;   
                }
                */
                turn=0;
                
                const block = document.getElementById(blocks[i][j].id);
                let kode = blocks[i][j].id;
                kode = kode.toUpperCase();
                block.innerHTML = "<button class='btn-custom' data-toggle='modal' data-target='#quizModal'>"+kode+"</button>";
                
                 updateLabelBorders();
             })
        }
}
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
    