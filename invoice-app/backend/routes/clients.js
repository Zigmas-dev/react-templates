const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Pridėti naują klientą
router.post("/add", async (req, res) => {
  console.log("📩 Gautas užklausos kūnas:", req.body);

  let { companyName, companyCode, vatCode, address, phone, email } = req.body;

  // Pašaliname tarpus
  companyName = companyName?.trim();
  companyCode = companyCode?.trim();
  vatCode = vatCode?.trim() || null;
  address = address?.trim();
  phone = phone?.trim();
  email = email?.trim();

  if (!companyName || !companyCode || !address || !phone || !email) {
    console.log("❌ Trūksta privalomų laukų.");
    return res.status(400).json({ message: "❌ Užpildykite visus privalomus laukus." });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO klientai (Įmonės_pavadinimas, Įmonės_kodas, PVM_kodas, Adresas, Telefonas, El_paštas) VALUES (?, ?, ?, ?, ?, ?)",
      [companyName, companyCode, vatCode, address, phone, email]
    );
    console.log("✅ Klientas pridėtas:", result);
    res.status(201).json({ message: "✅ Klientas pridėtas sėkmingai!", klientasId: result.insertId });
  } catch (error) {
    console.error("❌ Klaida pridedant klientą:", error);
    res.status(500).json({ message: "❌ Nepavyko pridėti kliento. Klaida: " + error.message });
  }
});

// Gauti visus klientus
router.get("/all", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM klientai");
    console.log("📜 Visi klientai:", rows);
    res.json(rows);
  } catch (error) {
    console.error("❌ Klaida gaunant klientus:", error);
    res.status(500).json({ message: "❌ Nepavyko gauti klientų duomenų." });
  }
});

// Atnaujinti kliento duomenis pagal ID
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("✏️ Atnaujinamas klientas, ID:", id);
  console.log("📩 Gautas užklausos kūnas:", req.body);

  let { companyName, companyCode, vatCode, address, phone, email } = req.body;

  // Patikriname ID
  if (!/^\d+$/.test(id)) {
    console.log("❌ Neteisingas ID formatas.");
    return res.status(400).json({ message: "❌ Neteisingas ID formatas." });
  }

  // Pašaliname tarpus
  companyName = companyName?.trim();
  companyCode = companyCode?.trim();
  vatCode = vatCode?.trim() || null;
  address = address?.trim();
  phone = phone?.trim();
  email = email?.trim();

  try {
    const [result] = await db.query(
      "UPDATE klientai SET Įmonės_pavadinimas = ?, Įmonės_kodas = ?, PVM_kodas = ?, Adresas = ?, Telefonas = ?, El_paštas = ? WHERE id = ?",
      [companyName, companyCode, vatCode, address, phone, email, id]
    );

    if (result.affectedRows === 0) {
      console.log("❌ Klientas nerastas.");
      return res.status(404).json({ message: "❌ Klientas nerastas." });
    }

    console.log("✅ Klientas atnaujintas sėkmingai!");
    res.json({ message: "✅ Klientas atnaujintas sėkmingai!" });
  } catch (error) {
    console.error("❌ Klaida atnaujinant klientą:", error);
    res.status(500).json({ message: "❌ Nepavyko atnaujinti kliento. Klaida: " + error.message });
  }
});

// Ištrinti klientą pagal ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("🗑️ Trinamas klientas, ID:", id);

  // Patikriname ID
  if (!/^\d+$/.test(id)) {
    console.log("❌ Neteisingas ID formatas.");
    return res.status(400).json({ message: "❌ Neteisingas ID formatas." });
  }

  try {
    const [result] = await db.query("DELETE FROM klientai WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      console.log("❌ Klientas nerastas.");
      return res.status(404).json({ message: "❌ Klientas nerastas." });
    }

    console.log("✅ Klientas ištrintas sėkmingai!");
    res.json({ message: "✅ Klientas ištrintas sėkmingai!" });
  } catch (error) {
    console.error("❌ Klaida trinant klientą:", error);
    res.status(500).json({ message: "❌ Nepavyko ištrinti kliento. Klaida: " + error.message });
  }
});

module.exports = router;
