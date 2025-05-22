# React + Electron USB portable app

* npm create vite@latest app
* cd app
* npm install
* npm install sass ....

# Electron įdiegimas

* npm install --save-dev electron
* npm intsall --save-dev electron-builder

# Failų struktūra

* app/
├── main/
│   └── electron.js ← pagrindinis Electron failas
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── index.scss
├── vite.config.js
├── package.json
└── electron-builder.json

# Paleidimas (Testavimas)

* npm run electron:serve

# Sukūrimas (portable .exe)

* npm run electron:build
- Failas atsiras aplanke dist-electron/app-USB.exe – šį failą gali perkelti į USB ir paleisti be jokios instaliacijos.


