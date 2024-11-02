import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './utills.js';

const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    if (isDev()) {
        mainWindow.loadURL('http://localhost:5173');
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react/index.html'));
    }
};

app.whenReady().then(() => {
    createMainWindow();
});

