function getTime() {
  let [hour, minute, second] = new Date()
    .toLocaleTimeString()
    .slice(0, 8)
    .split(":");
  document.body.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(getTime, 1000);
