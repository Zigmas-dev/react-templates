const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

// 🔹 Registracija
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json({ message: "❌ Klaida registruojant" });
      res.json({ message: "✅ Registracija sėkminga!" });
    }
  );
});

// 🔹 Prisijungimas
router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
      if (err || results.length === 0) return res.status(401).json({ message: "❌ Neteisingi duomenys" });
  
      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ message: "❌ Neteisingi duomenys" });
  
      // 🔹 Pridedame ID prie tokeno
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ token });
    });
  });

module.exports = router;
