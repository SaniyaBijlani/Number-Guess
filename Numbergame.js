// generate random value using - Math.random() returns you a value betwen 0 and 1 (we need an int bet 1-100)
// use Mayj.ceil,.round,.floor


let randomNumber = generateRandom();
let numberOfTries = 0;
let guesses = document.querySelector('#guesses');
let Loworhigh = document.querySelector('#loworhi');
let statusValue = document.querySelector('#status');
let ip = document.querySelector('#ip');
let container = document.querySelector('.container');
let resetBtn = document.querySelector('.reset');


let btn = document.querySelector(".button");
btn.addEventListener('click',()=>CheckGuess());
console.log(randomNumber);




function CheckGuess(){
    console.log(randomNumber)
    enteredValue = +ip.value;
    if(enteredValue < randomNumber){
        statusValue.textContent = 'WRONG';
        statusValue.className = 'fail';
        Loworhigh.textContent='TOO LOW';
    }
    else if(enteredValue > randomNumber){
        statusValue.textContent = 'WRONG';
        statusValue.className = 'fail';
        Loworhigh.textContent='TOO HIGH';
    }
    else{
        statusValue.textContent = 'CONGRATULATIONS';
        statusValue.className = 'success';
        Loworhigh.textContent='';
        gameOver()
    }

    guesses.textContent += `${enteredValue} `
    ip.value='';
    ip.focus();
    numberOfTries++;
    console.log(numberOfTries)
    if(numberOfTries === 5){
        statusValue.textContent = 'GAMEOVER';
        gameOver();
    }
 
}

function gameOver() {
    ip.disabled = true;
    btn.classList.add('d-none');
    resetBtn.classList.remove('d-none');
    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener('click',()=>resetGame());
}

function resetGame() {
    guesses.textContent = '';
    statusValue.textContent = '';
    Loworhigh.textContent = '';
    numberOfTries = 0;
    randomNumber = generateRandom();
    ip.disabled = false;
    ip.value = '';
    btn.classList.remove('d-none');
    resetBtn.classList.add('d-none');
}


//input from user and print
function generateRandom(){
   return Math.floor(Math.random() * 100) + 1;

}



