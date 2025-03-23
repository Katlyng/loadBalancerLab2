require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

const loadNodesConfig = () => {
    const rawData = fs.readFileSync('nodes.config.json');
    return JSON.parse(rawData).nodes;
};

const nodes = loadNodesConfig();
console.log("Nodos disponibles:", nodes);

// Middleware para parsear JSON
app.use(express.json());

// Endpoint básico para comprobar el servidor
app.get('/', (req, res) => {
  res.send('Servidor Node.js con Express funcionando correctamente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});