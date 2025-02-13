require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer nustatymai su SMTP serveriu
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // SMTP serveris
  port: process.env.SMTP_PORT, // SMTP prievadas
  secure: process.env.SMTP_SSL === "true", // SSL ryšys
  auth: {
    user: process.env.EMAIL_USER,  // El. pašto vartotojas
    pass: process.env.EMAIL_PASSWORD,  // El. pašto slaptažodis
  },
});

// Siųsti el. laišką
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,  // Siųsti į tavo el. paštą
    subject: "Nauja žinutė iš kontaktų formos",
    text: `📩 Nauja žinutė:\n\n👤 Vardas: ${name}\n📧 El. paštas: ${email}\n📞 Telefonas: ${phone}\n📝 Žinutė:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ El. laiškas išsiųstas sėkmingai iš ${email}`);
    res.status(200).json({ success: true, message: "Žinutė išsiųsta!" });
  } catch (error) {
    console.error("❌ Klaida siunčiant el. laišką:", error);
    res.status(500).json({ success: false, message: "Nepavyko išsiųsti žinutės" });
  }
});

// Paleisti serverį
app.listen(port, () => {
  console.log(`🚀 Serveris veikia ant ${port} porto`);
});
