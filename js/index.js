//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

const element = document.createElement("div");

element.innerHTML = "Hello, Dom!";
element.style.backgroundColor = "#f9f9f9";

document.body.appendChild(element);

console.log("In the dom");

const list = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  li = document.createElement("li");
  li.innerHTML = i + " Thing";
  list.appendChild(li);
}

document.body.appendChild(list);

list.children[0].remove();
