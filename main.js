// let username;

// document.getElementById('myBtn').onclick = () =>{
//     username = document.getElementById('myText').value;
//     document.getElementById('myH1').textContent = `Hello  ${ username }`;


// }

// age =Number(window.prompt("what's the age of the soni?"));
// // age = Number(age);
// age += 1 ;
// console.log(age);


// #6 constants

// const pi = 3.142;
// let radius;
// let circumference;

// radius =  window.prompt("what is the radius of the circle");
// radius = Number(radius);


// circumference = 2 * pi * radius;

//  console.log(circumference);

// const pi = 3.142;
// let radius;
// let circumference;



// document.getElementById("myBtn").onclick = ()=> {

//    radius = document.getElementById("myText").value;
//    radius = Number(radius);
//    circumference = 2 * pi * radius;

//    document.getElementById("myH3").textContent = `The circumference is  = ${circumference} cm` ;




// }


// #7 increment and decrement Task

// const label = document.getElementById("myLabel");
// const decrement = document.getElementById("decrement");
// const increment = document.getElementById("increment");
// const reset = document.getElementById("reset");


// let lableValue =  label.innerText;
// lableValue = Number( lableValue);


// decrement.onclick = function () {
//     label.innerText = lableValue--;
// }
// increment.onclick = function () {
//     label.innerText = lableValue++;
// }
// reset.onclick = function () {
//     lableValue = 0;
//     label.innerText = lableValue;
// }


// #9 random number generator.

// const myButton = document.getElementById('myButton');
// const myLabel = document.getElementById('myLabel');
// let randomNumber;
// myButton.onclick = ()=>{
//     randomNumber = Math.ceil(Math.random() * 6);
//     myLabel.innerText = randomNumber
// }



// 11 checked property 




// console.log(randomNumber);


const myText = document.getElementById('myText');
const myBtn = document.getElementById('myBtn');
const result = document.getElementById('result');

let age;

myBtn.onclick = () => {

    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        // console.log("You are Too old to enter this site");
        result.innerText = "You are Too old to enter this site" 
    } else if (age == 0) {

        // console.log("You can't enter. you are just born");
        result.innerText = "You can't enter. you are just born"


    } else if (age >= 18) {
        // console.log("You are old enough to enter this site");
        result.innerText ="You are old enough to enter this site"
        

    } else if (age < 0) {
        console.log("You can't be below 0");
        
        // console.log("You are old enough to enter this site");
        result.innerText = "You can't be below 0";
    } else {
        // console.log("You must be 18+ to enter this site");
        result.innerText = "You must be 18+ to enter this site"

    }
}
