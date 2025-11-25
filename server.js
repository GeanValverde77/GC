const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta de prueba para ver que el servidor responde
app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    message: "Servidor funcionando correctamente",
    host: req.headers.host,
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
