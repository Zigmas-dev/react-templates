// Duomenų bazės konfiguracija

const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Prisijungta prie DB');
    return connection;
  } catch (err) {
    console.error('Neoavyko prisijungti prie DB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;