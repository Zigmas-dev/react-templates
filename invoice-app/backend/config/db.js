require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}).promise(); // Čia paverčiam objektą į Promise pagrįstą versiją

db.connect()
  .then(() => console.log("✅ Prisijungta prie duomenų bazės!"))
  .catch(err => {
    console.error("❌ Nepavyko prisijungti prie DB:", err);
    process.exit(1);
  });

module.exports = db;
