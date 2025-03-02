const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Pridėti naują klientą
router.post("/add", async (req, res) => {
  const { Įmonės_pavadinimas, Įmonės_kodas, PVM_kodas, Adresas, Telefonas, El_paštas } = req.body;
  
  if (!Įmonės_pavadinimas || !Įmonės_kodas || !Adresas || !Telefonas || !El_paštas) {
    return res.status(400).json({ message: "Užpildykite visus privalomus laukus." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO klientai (Įmonės_pavadinimas, Įmonės_kodas, PVM_kodas, Adresas, Telefonas, El_paštas) VALUES (?, ?, ?, ?, ?, ?)",
      [Įmonės_pavadinimas, Įmonės_kodas, PVM_kodas || null, Adresas, Telefonas, El_paštas]
    );
    res.status(201).json({ message: "✅ Klientas pridėtas sėkmingai!", klientasId: result.insertId });
  } catch (error) {
    console.error("❌ Klaida pridedant klientą:", error);
    res.status(500).json({ message: "❌ Vidinė serverio klaida." });
  }
});

// Gauti visus klientus
router.get("/all", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM klientai");
    res.json(rows);
  } catch (error) {
    console.error("❌ Klaida gaunant klientus:", error);
    res.status(500).json({ message: "❌ Vidinė serverio klaida." });
  }
});

// Atnaujinti kliento duomenis pagal ID
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { Įmonės_pavadinimas, Įmonės_kodas, PVM_kodas, Adresas, Telefonas, El_paštas } = req.body;

  try {
    const result = await pool.query(
      "UPDATE klientai SET Įmonės_pavadinimas = ?, Įmonės_kodas = ?, PVM_kodas = ?, Adresas = ?, Telefonas = ?, El_paštas = ? WHERE id = ?",
      [Įmonės_pavadinimas, Įmonės_kodas, PVM_kodas || null, Adresas, Telefonas, El_paštas, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "❌ Klientas nerastas." });
    }

    res.json({ message: "✅ Klientas atnaujintas sėkmingai!" });
  } catch (error) {
    console.error("❌ Klaida atnaujinant klientą:", error);
    res.status(500).json({ message: "❌ Vidinė serverio klaida." });
  }
});

// Ištrinti klientą pagal ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM klientai WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "❌ Klientas nerastas." });
    }

    res.json({ message: "✅ Klientas ištrintas sėkmingai!" });
  } catch (error) {
    console.error("❌ Klaida trinant klientą:", error);
    res.status(500).json({ message: "❌ Vidinė serverio klaida." });
  }
});

module.exports = router;
