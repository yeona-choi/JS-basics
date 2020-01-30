//console.log("Im Working. Im YA. Im Beautiful. ");

// var ab = 21;
// var ab = 31;
// let a = 221;
// let b = a - 10;
// const c = b + a;
// //c = a;
// //let c = a;
// console.log(b, a, c, ab);

// var - function scope
// let, const - block scope
// var 지양하는 이유 - 변수값의 변환이 유동적으로 변경됨, 변수의 유효범위 function scope, 호이스팅


/*
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", 123, true, ["a", 12], { a: 1, b: "ddd" }];

console.log(daysOfWeek);
console.log(daysOfWeek[5]);
console.log(daysOfWeek[8]);
*/
// array - list 
// object - info

/*
const incoInfo = {
    name: "Yeona",
    age: 27,
    gender: "Female",
    isPretty: true,
    favMovies: ["LOTR", "AAA", "LALA"],
    favFood: [
        { name: "Kimchi", fatty: false }, { name: "burger", fatty: true }
    ]
}

console.log(incoInfo);
console.log(incoInfo.isPretty);
console.log(incoInfo.name);
console.log(incoInfo.favMovies[0]);
console.log(incoInfo.favFood[1].name);
// 여러 info들을 list로 만들고싶음 info Obj을 array안에 넣으면됨.
*/

//console.log(console);
/*
function sayHello(name, age) {
    // console.log("Hello~", name, " You're ", age, "years old");
    return `Hello ${name}. You're ${age} years old`;
}

//sayHello("Yeona", 27);

const greetYeona = sayHello("Yeona", 27);

console.log(greetYeona);
console.log(sayHello("Yeona", 27));
*/

// 1. object, function ,argument, return  2. result 변수에 담아서  jquery console.log  
/*
const calculator = {
    plus: function (a, b) {
        return `${a}+${b}=${a + b}`;
    },
    minus: function (a, b) {
        return `${a}-${b}=${a - b}`;
    },
    ab: function (a, b) {
        return `${a}*${b}=${a * b}`;
    },
    di: function (a, b) {
        return `${a}/${b}=${a / b}`;
    }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const ab = calculator.ab(5, 5);
const di = calculator.di(5, 5);
console.log(`${plus}`);
console.log(`${minus}`);
console.log(`${ab}`);
console.log(`${di}`);
*/

/*
const title = document.querySelector("#title");
//const title = document.getElementById("title");
title.innerHTML = "It's awsome!";
title.style.color = "red";
console.log(title);
console.log(document);
console.dir(document);
document.title = "I own you now";

console.dir(window);

*/
/*
const title = document.querySelector("#title");

// function handleResize() {
//     console.log(event);
// }

function handleClick() {
    title.style.color = "red";

}

//window.addEventListener("resize", handleResize);
window.addEventListener("click", handleClick);
*/

/*
const age = prompt("How old are you?");

if (age > 19) {
    alert("You can drink");
} else {
    alert("You cannot drink");
}
*/


/*
const title = document.querySelector("#title");
const BASE_COLOR = "cornflowerblue";
const OTHER_COLOR = "red"

function handleClick() {

    let currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}


function init() {
    title.style.color = BASE_COLOR;
    //title.addEventListener("click", handleClick);
    title.addEventListener("mouserover", handleClick);
}
init();



function handleOffline() {
    console.log("offline offline")
}

function handleOnline() {
    console.log("online online");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

// init()를실행해 h1 색변경 하기

const title = document.querySelector("#title");
const CLICKED_COlOR = "clicked";
function handleclick() {

    console.log(title);
    title.classList.toggle(CLICKED_COlOR);
    /*
    const hasClass = title.classList.contains(CLICKED_COlOR);
    if (!hasClass) {
        //리스트에 clicked 추가
       // title.classList.add(CLICKED_COlOR);
        //title.className = CLICKED_COlOR;
    } else {
        //리스트에 clicked 삭제
        title.classList.remove(CLICKED_COlOR);
        //title.className = "";
    }
    */
}

function init() {
    title.addEventListener("click", handleclick);
}

init();

