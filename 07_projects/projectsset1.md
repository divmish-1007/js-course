## Projects related to DOM

### Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code


## Project 1

```javascript
console.log("hitesh")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  });
});
```

## Project 2 Solution

```JavaScript

const form = document.querySelector('form')
// This use case will give you empty value
// const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value);
   const weight =  parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');
   const message = document.querySelector('#message');

   if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please Give a valid Height ${height}`; 
   }
   else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please Give a valid weight ${weight}`; 
   }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span> ${bmi} </span>`
    const result = results.textContent

    if( result < 18.6){
        message.innerHTML = `<span> Under Weight </span>`
       
    }
    else if(result>=18.6 &&  result <= 24.9){
        message.textContent = `Normal Weight `
        
    }
    else if( result > 24.9){
        message.innerHTML = `<span>Overweight</span>`
        
    }
    
  }
})


```
## Project 3 Solution code
```JavaScript

const clock = document.getElementById('clock')

// Use Any One either getElementById or querySeleector
// Both will work similar

// const clock = document.querySelector('#clock')


// Time is always given in miliseconds 1sec=1000ms
// Always remeber the syntax of setInterval. may be you confused
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## Project 4 solution code

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    });
}

function validateGuess(guess){
    // value should be 1 to 100, not accept character, not accept -ve value
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    }
    else if(guess<1){
        alert('Please Enter a Number more than 1')
    }
    else if(guess>100){
        alert('Please Enter a Number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // message print guess value is high/less
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`);
    }
    else if(guess > randomNumber){
        displayMessage('Number is TOOO High');
    }
}

function displayGuess(guess){
    // 
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    // Dom manuplutain
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML  = '<h2 id = "newGame"> Start new Game </h2>'
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML=''
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}
```