// Saugesnis bendravimas tarp Electron ir React
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // čia gali pridėti metodus, jei norėsi vėliau
});
