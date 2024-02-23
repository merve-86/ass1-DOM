const headerStyle = document.querySelector(".header");

headerStyle.style.backgroundColor = "hotpink";
headerStyle.style.color = "wheat";
headerStyle.style.padding = "10px";
headerStyle.style.textAlign = "center";
headerStyle.style.width = "80%";
headerStyle.style.margin = "auto";
headerStyle.style.marginTop = "20px";
headerStyle.style.borderRadius = "10px"
headerStyle.style.boxShadow = "2px 2px 10px black"


document.getElementById("title").textContent = "Javascript Dom Assignment 1";
const ulStyle = document.querySelector(".nav-item");
ulStyle.style.display = "flex";
ulStyle.style.justifyContent = "center";
ulStyle.style.gap = "2rem";
ulStyle.style.listStyleType = "none";
ulStyle.style.cursor = "pointer";


const userName = document.querySelector("#username");
userName.value = "Anthony";
userName.style.padding = "10px";
userName.style.borderRadius = "10px";
userName.style.border = "none";
userName.disabled = true


const password = document.querySelector("#password");
password.value = "123456";
password.style.padding = "10px";
password.type = "text";
password.disabled = true
password.style.borderRadius = "10px";
password.style.border = "none";

const btnStyle = document.querySelector(".btn");
btnStyle.style.backgroundColor = "#BFEFC0";
btnStyle.style.color = "#000000";
btnStyle.style.padding = "10px";
btnStyle.style.borderRadius = "10px";
btnStyle.style.border = "none";
btnStyle.textContent = "Giriş Yap";

const section = document.getElementById("projects");
const h3 = (section.firstElementChild.textContent = "Js Dom Projects");
section.firstElementChild.style.marginBottom = "20px"
section.firstElementChild.style.fontWeight = "bold"
section.firstElementChild.style.fontSize = "2rem"
section.firstElementChild.style.textAlign = "center"

const ul = section.lastElementChild;
const li1 = document.createElement("li");
const text1 = document.createTextNode("Hello World!");
section.style.border = "2px solid black"
section.style.boxShadow = "2px 2px 10px black"
section.style.borderRadius = "10px"
section.style.padding = "30px"
section.style.width = "50%"
section.style.marginBlock = "30px"






ul.appendChild(li1);
li1.appendChild(text1);
li1.style.fontSize = "1.5rem"
li1.style.marginBlock = "0.5rem"

const li2 = document.createElement("li");
const text2 = document.createTextNode("Guess Number");
ul.appendChild(li2);
li2.appendChild(text2);
li2.style.fontSize = "1.5rem";
li2.style.marginBlock = "0.5rem";

const li3 = document.createElement("li");
const text3 = document.createTextNode("Checkout Page");
ul.appendChild(li3);
li3.appendChild(text3);
li3.style.fontSize = "1.5rem";
li3.style.marginBlock = "0.5rem";


const li4 = document.createElement("li");
const text4 = document.createTextNode("Gelir-Gider Projesi");
ul.appendChild(li4);
li4.appendChild(text4);
li4.style.fontSize = "1.5rem";
li4.style.marginBlock = "0.5rem";

const li5 = document.createElement("li");
const text5 = document.createTextNode("Api Projects");
ul.appendChild(li5);
li5.appendChild(text5);
li5.style.fontSize = "1.5rem";
li5.style.marginBlock = "0.5rem";

document.querySelector("body").style.backgroundColor = "lightgoldenrodyellow";
