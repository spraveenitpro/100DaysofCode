const app = document.createElement("div");
document.body.appendChild(app);

app.innerHTML = "<h1>Hello there</h1>";

const newNode = document.createElement("h2");
newNode.innerText = "New Node";

document.body.insertBefore(newNode, app);

app.classList.add("wrapper");
app.id = "app";

const getApp = document.querySelector("#app");

const label = document.createElement("p");
label.appendChild(document.createTextNode("This is a "));
const strong = document.createElement("strong");
strong.innerText = "Water";
label.appendChild(strong);
label.appendChild(document.createTextNode(" type Pokemon"));

app.appendChild(label);
