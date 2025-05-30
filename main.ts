const { app } = require("electron");
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
const startServer = require("./server");

function startApp() {
  startServer();

  autoUpdater.logger = log;
  autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on("update-downloaded", (info) => {
    log.info("Update downloaded; will quit and install.");
    autoUpdater.quitAndInstall();
  });
}

app.whenReady().then(startApp);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  console.log("Activated");
});
