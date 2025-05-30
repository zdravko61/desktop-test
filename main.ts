const { app } = require("electron");
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
const startServer = require("./server");

// Replace electron-is-dev with manual check
// const isDev = process.env.NODE_ENV === "development" || !app.isPackaged;

function startApp() {
  startServer();
  autoUpdater.logger = log;
  autoUpdater.checkForUpdatesAndNotify();
}

app.whenReady().then(startApp);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  // Background app: no UI to recreate
  console.log("Activated");
});
