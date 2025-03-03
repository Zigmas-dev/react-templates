require("dotenv").config();
const mysql = require("mysql2/promise"); // Naudojame `promise` versiją

const db = mysql.createPool({ // Naudojame `createPool` geresniam valdymui
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Nustatome jungčių limitą
  queueLimit: 0,
});

db.getConnection()
  .then(() => console.log("✅ Prisijungta prie duomenų bazės!"))
  .catch(err => {
    console.error("❌ Nepavyko prisijungti prie DB:", err);
    process.exit(1);
  });

module.exports = db;
