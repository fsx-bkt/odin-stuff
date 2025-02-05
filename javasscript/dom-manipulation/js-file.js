const body = document.body;
const paragraph = document.createElement("p");
const header3 = document.createElement("h3");
const bigDiv = document.createElement("div");
const bigDivh1 = document.createElement("h1");
const bigDivP = document.createElement("p");

paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

header3.style.color = "blue";
header3.textContent = "I'm a blue h3!";

bigDiv.style.backgroundColor = "pink";
bigDiv.style.borderColor = "black";
bigDivh1.textContent = "I'm in a div";
bigDivP.textContent = "ME TOO!";

bigDiv.appendChild(bigDivh1);
bigDiv.appendChild(bigDivP);

body.appendChild(paragraph);
body.appendChild(header3);
body.appendChild(bigDiv);