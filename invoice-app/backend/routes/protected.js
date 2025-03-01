const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

// 🔹 Apsaugotas maršrutas
router.get("/", authenticateToken, (req, res) => {
    res.json({ message: "✅ Sveikas prisijungęs!", user: req.user });
  });
  
  // 🔹 Pvz.: gauti vartotojo duomenis
  router.get("/profile", authenticateToken, (req, res) => {
    db.query("SELECT id, email FROM users WHERE id = ?", [req.user.id], (err, results) => {
      if (err || results.length === 0) return res.status(404).json({ message: "❌ Vartotojas nerastas" });
      res.json(results[0]);
    });
  });

module.exports = router;
