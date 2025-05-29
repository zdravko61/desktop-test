import { app } from "electron";
import isDev from "electron-is-dev";
import log from "electron-log";
import { autoUpdater } from "electron-updater";
import startServer from "./server";

function startApp(): void {
  startServer();

  if (!isDev) {
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

app.whenReady().then(startApp);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  // Background app: no UI to recreate
  console.log("Activated");
});
