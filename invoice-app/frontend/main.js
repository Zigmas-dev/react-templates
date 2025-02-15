import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Sukuriame __dirname ESM režime
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`);
	mainWindow.on('closed', () => (mainWindow = null));
};

app.whenReady().then(createWindow);
