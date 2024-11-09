const express = require('express');
const app = express();
const port = 3000;

// Egyetlen GET végpont
app.get('/', (req, res) => {
  res.send('Ez egy GET válasz');
});

// Szerver indítása
app.listen(port, () => {
  console.log(`Szerver fut a http://localhost:${port} címen`);
});
