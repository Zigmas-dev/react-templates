const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

// 🔹 Registracija
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Įrašome vartotoją į DB
    const [result] = await db.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );

    res.json({ message: "✅ Registracija sėkminga!", userId: result.insertId });
  } catch (error) {
    console.error("❌ Klaida registruojant:", error);
    res.status(500).json({ message: "❌ Serverio klaida" });
  }
});

// 🔹 Prisijungimas
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Tikriname, ar vartotojas egzistuoja
    const [results] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (results.length === 0) {
      return res.status(401).json({ message: "❌ Neteisingi duomenys" });
    }

    const user = results[0];

    // Tikriname slaptažodį
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "❌ Neteisingi duomenys" });
    }

    // Generuojame JWT tokeną
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("❌ Klaida prisijungiant:", error);
    res.status(500).json({ message: "❌ Serverio klaida" });
  }
});

module.exports = router;
