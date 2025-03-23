require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint básico para comprobar el servidor
app.get('/', (req, res) => {
  res.send('Servidor Node.js con Express funcionando correctamente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});