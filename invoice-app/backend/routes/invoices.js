const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Gauti visas sąskaitas (arba paskutinę)
router.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM sąskaitos ORDER BY sukurta_data DESC LIMIT 1");
        if (rows.length > 0) {
            res.json({ invoiceNumber: rows[0].sąskaitos_numeris });
        } else {
            res.json({ invoiceNumber: null });
        }
    } catch (error) {
        console.error("Klaida gaunant sąskaitas:", error);
        res.status(500).json({ message: "Nepavyko gauti sąskaitų. Klaida: " + error.message });
    }
});

// Pridėti naują sąskaitą
router.post("/", async (req, res) => {
    const { client, services, invoiceNumber } = req.body;

    if (!client || !services || !invoiceNumber) {
        return res.status(400).json({ message: "Trūksta privalomų laukų." });
    }

    try {
        // Įrašome sąskaitą
        const [invoiceResult] = await db.query(
            "INSERT INTO sąskaitos (sąskaitos_numeris, klientas) VALUES (?, ?)", // Pašalinome 'paslaugos'
            [invoiceNumber, JSON.stringify(client)]
        );
        const invoiceId = invoiceResult.insertId;

        // Įrašome paslaugas ir sąskaitų_paslaugų ryšius
        for (const service of services) {
            // Patikriname, ar paslauga jau egzistuoja
            let [serviceRows] = await db.query("SELECT id FROM paslaugos WHERE pavadinimas = ?", [service.name]);
            let serviceId;

            if (serviceRows.length > 0) {
                serviceId = serviceRows[0].id;
            } else {
                // Jei neegzistuoja, įrašome naują paslaugą
                const [serviceResult] = await db.query(
                    "INSERT INTO paslaugos (pavadinimas, kaina) VALUES (?, ?)",
                    [service.name, service.price]
                );
                serviceId = serviceResult.insertId;
            }

            // Įrašome sąskaitos_paslaugos ryšį
            await db.query(
                "INSERT INTO sąskaitos_paslaugos (sąskaitos_id, paslaugos_id, kiekis, vieneto_kaina) VALUES (?, ?, ?, ?)",
                [invoiceId, serviceId, service.quantity, service.price]
            );
        }

        res.status(201).json({ message: "Sąskaita pridėta sėkmingai!", invoiceId: invoiceId });
    } catch (error) {
        console.error("Klaida pridedant sąskaitą:", error);
        res.status(500).json({ message: "Nepavyko pridėti sąskaitos. Klaida: " + error.message });
    }
});

module.exports = router;