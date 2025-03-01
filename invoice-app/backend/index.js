require("dotenv").config();
const express = require("express");

const app = express();
const port = proccess.env.PORT || 3000;

app.listen(port, () => {
    console.log(`🚀 Serveris veikia ant ${port} porto`);
  });
