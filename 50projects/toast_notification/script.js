const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];
const type = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());
function createNotification(messages = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = getRandommessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
}

function getRandommessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return type[Math.floor(Math.random() * type.length)];
}
