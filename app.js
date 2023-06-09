const express = require("express");
const app = express();
const path = require("path");

// Rutas
app.listen(process.env.PORT || 3000, () => {
  console.log("servidor corriendo OK");
});
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "views/product.html"));
});
app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contacto.html"));
});
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('¡Consulta enviada con éxito!');
});
