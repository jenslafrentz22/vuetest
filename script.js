const dDiv = document.querySelector("#dynamic");
const h1 = document.createElement("h1");
const h1Text = document.createTextNode("Hello!");
h1.appendChild(h1Text);
const pName = document.createElement("p");
const pText = document.createTextNode("My Name is");
pName.append(pText);
dDiv.append(h1, pName);
console.log(dDiv);
