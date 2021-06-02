 
document.addEventListener('DOMContentLoaded', function () {

let button = document.createElement('button');
let btnText = document.createTextNode('Click Me');
button.appendChild(btnText)
document.body.appendChild(button);

addEventListener("click", click);
    function click() {
        alert("This is a very nice message.")
    }

    let div = document.getElementById ("div");
div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseleave", function() {
    div.style.backgroundColor = "black";
})

let p = document.getElementById("p");
p.addEventListener("click", function() {
    let allchar = "0123456789ABCDEF";
    let randcol = "";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    p.style.color = "#" + randcol;
})

let button = document.getElementById("button");
let div = document.getElementById("div");
button.addEventListener("click", function() {
    let span = document.createElement("span");
    div.appendChild(span);
    let text = document.createTextNode("Evan");
    span.appendChild(text);
})

let friends = ["Bob", "Kelvin", "Calvin", "Shell", "Mike", "Lonnie", "Tommy", "Tamyrah", "Mary", "James"];
let button = document.getElementById("button");
let ul = document.getElementById("ul");

button.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }















});