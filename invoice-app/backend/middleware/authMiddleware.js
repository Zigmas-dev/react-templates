const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // 🔹 Išskiriam "Bearer TOKEN"
  
    if (!token) return res.status(403).json({ message: "❌ Prieiga draudžiama" });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "❌ Netinkamas arba pasibaigęs tokenas" });
  
      req.user = user;
      next();
    });
  }

module.exports = authenticateToken;
