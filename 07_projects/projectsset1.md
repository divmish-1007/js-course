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

.container{
    height: 825px;
    width: 575px;

    background-color: #87a4ab;
    padding-left: 30px;
    margin-left: 30%;
}

#height,
#weight{
    width: 150px;
    height: 20px;
    margin-top: 30px;
}
#weight-guide{
    margin-left: 75px;
    margin-top: 25px;
}

#results{
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(241, 241, 241);
}
#message{
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(241, 241, 241);
}

button{
    width:150px;
    height: 35px;
    margin-left: 90px;
    margin-top: 25px;
    background-color: #fff;
    padding: 1px, 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
    font-size: 25px;
}

h1{
    padding-left: 15px;
    padding-top: 25px;
}

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