const main = document.getElementById("mainContain");

const mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";
const red = document.createElement("button");
const blue = document.createElement("button");
const green = document.createElement("button");
const yellow = document.createElement("button");

red.className = "red";
blue.className = "blue";
green.className = "green";
yellow.className = "yellow";

const colors = ["red", "blue", "green", "yellow"];

console.log(colors);
mainDiv.appendChild(red);
mainDiv.appendChild(blue);
mainDiv.appendChild(green);
mainDiv.appendChild(yellow);

main.appendChild(mainDiv);
