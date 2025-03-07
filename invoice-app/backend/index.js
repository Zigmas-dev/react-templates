require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const clientsRoutes = require("./routes/clients");
const invoicesRouter = require("./routes/invoices");
const protectedRoutes = require("./routes/protected");

const app = express();
app.use(express.json());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`🛠️ Nauja užklausa: ${req.method} ${req.url}`);
  console.log("📩 Užklausos kūnas:", req.body);
  next();
});


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use("/auth", authRoutes);
app.use("/clients", clientsRoutes);
app.use("/invoices", invoicesRouter);
app.use("/protected", protectedRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Serveris veikia ant ${PORT}`);
});
