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