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

let label = document.getElementById("myLabel");
let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let reset = document.getElementById("reset");


let lableValue =  label.innerText;
lableValue = Number( lableValue);


decrement.onclick = function () {
    label.innerText = lableValue--;
}
increment.onclick = function () {
    label.innerText = lableValue++;
}
reset.onclick = function () {
    lableValue = 0;
    label.innerText = lableValue;
}


