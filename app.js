// Importa Express
const express = require('express');

// Crea una nueva aplicación Express
const app = express();

// Define el puerto
const port = 80;

// Ruta que responde con un estado 404
app.get('/no-encontrado', (req, res) => {
  // Envía una respuesta con estado 404
  res.status(404).send('Página no encontrada');
});

// Ruta que responde con un estado 500 como ejemplo
app.get('/error-servidor', (req, res) => {
  // Envía una respuesta con estado 500
  res.status(500).send('Error interno del servidor');
});

// Ruta para la página principal con botón de redirección a YouTube
app.get('/', (req, res) => {
  // HTML que se enviará como respuesta
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Página Principal</title>
</head>
<body>
<h1>Página principal con estado 200</h1>
<!-- Botón que al hacer clic redirige a YouTube -->
<button onclick="window.location.href='https://www.youtube.com';">Ir a YouTube</button>
</body>
</html>
  `;

  // Envía el HTML como respuesta
  res.send(html);
});

// Inicia el servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en http://0.0.0.0:${port}`);
});