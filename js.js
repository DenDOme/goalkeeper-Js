let startDisp = document.getElementById('startpage');
let errorMsg = document.getElementById('error');
let gameDisp = document.getElementById('gamepage');
let userDisp = document.getElementById('user__name');
let timeDisp = document.getElementById('user__time');
let userChoose = document.querySelectorAll('.game__choose');
let scoreDisp = document.getElementById('user__score');
let endScore = document.querySelector('.end__score');
let endUser = document.querySelector('.end__user');

let score = 0;
let currTime = 10;
let countDownId;
let user;
let isPause = false;
function checkName(){
    user = document.getElementById('userName').value;
    if(user === ''|| user === null){
        errorMsg.innerHTML = 'NEED NAME';
    }
    else{
        startDisp.style.display = 'none';
        startGame();
    }
}
function startGame(){
    isPause = false;
    userDisp.innerHTML = user;
    if(user !== 'tester'){
        countDownId = setInterval(countDown, 1000);
    }
    userChoose.forEach(choose => {
        choose.addEventListener('click',() => {
            let compChoose = userChoose[Math.floor(Math.random() * 5)];
            if(choose.id == compChoose.id){
            }
            else{
                score++;
                scoreDisp.innerHTML = score;
            };
        })
    })
}
document.addEventListener('keydown',pauseBtn)
function pauseBtn(e){
    if(e.key == ' '){
        if(isPause == true){
            isPause = false;
        }
        else{
            isPause = true;
        }
    }

}
function countDown(){
    if(!isPause){
        currTime--;
        timeDisp.innerHTML = currTime;

        if(currTime < 0){
            clearInterval(countDownId);
            gameDisp.style.display = 'none';
            endGame();
        }
    }
}
function endGame(){
    endScore.innerHTML = score;
    endUser.innerHTML = user;
}