const express = require('express');
const app = express();
const port = 8000;

// Egyetlen GET végpont
app.use("/", express.static("public"));

// Szerver indítása
app.listen(port, () => {
  console.log(`Szerver fut a http://localhost:${port} címen`);
});
