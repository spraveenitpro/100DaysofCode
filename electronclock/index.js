const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 290,
    height: 100,
    resizable: false,
  });
  win.loadFile("index.html");
}
