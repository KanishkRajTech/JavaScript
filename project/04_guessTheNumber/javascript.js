let randomNumber = (parseInt( Math.random() * 100 + 1 ) )
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.querySelector('p')

let prevGuess = []
let numGuss = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
        
    })
}


function validateGuess(guess){
    console.log(guess);
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuss == 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number is ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
        console.log("You guessed it right");
    }
    else if(guess < randomNumber){
        displayMessage(`Number is tooo low`)
        console.log("Number is tooo low");
    }
    else if(guess > randomNumber){
        displayMessage(`Number is tooo High`)
        console.log("Number is tooo High");
    }
}

function displayGuess(guess){
    userInput.value = ''
    guesses.innerHTML += `${guess}, `
    numGuss++
    lastResult.innerHTML = `${11 - numGuss}`

}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameBttone = document.querySelector('#newGame')
    newGameBttone.addEventListener('click', function(e){
        randomNumber =    (parseInt( Math.random() * 100 + 1 ) )
        prevGuess = []
        numGuss = 1
        guesses.innerHTML = ''
        lastResult.innerHTML = `${11 - numGuss}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = ''
        playGame = true

    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}