let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numguess = 1

let palyGame = true;

if(palyGame){
    submit.addEventListener('click',function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        valideteGuess(guess)
    })
}
function valideteGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('please enter a number more than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if( numguess === 11){
            displayGuess(guess)
            displayMessage(`Game Over,Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(` You guessed it right`)
    } else if(guess < randomNumber){
        displayMessage(` Number is toooo low`)
    } else if (guess > randomNumber){
        displayMessage(` Number is too high`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
    startOver.appendChild(p)
    palyGame = false
    newGame();
}
function endGame(){
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click', function(event){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    palyGame = true
   })
}