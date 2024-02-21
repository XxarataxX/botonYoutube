const express = require('express');
const app = express();
const port = 3000;
 
// Middleware para servir archivos estáticos (si es necesario)
app.use(express.static('public'));
 
app.get('/', (req, res) => {
  // HTML que se enviará como respuesta
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acceso a Internet</title>
</head>
<body>
<h1>Bienvenido al acceso Wi-Fi</h1>
<p>Por favor, haz clic en el botón de abajo para acceder a Internet.</p>
<!-- Botón que al hacer clic lleva a la ruta de autenticación -->
<form action="/autenticar" method="post">
<button type="submit">Acceder a Internet</button>
</form>
</body>
</html>
  `;
 
  // Envía el HTML como respuesta
  res.send(html);
});
 
// Ruta para manejar la autenticación
app.post('/autenticar', (req, res) => {
  // Aquí iría la lógica para marcar al usuario como autenticado en el sistema del hotspot.
  // Esto podría implicar enviar una solicitud a la API del hotspot, establecer una cookie, etc.
 
  // Por ahora, solo redirigimos al usuario a una página de éxito (o directamente a Internet)
  // Deberías reemplazar esta URL por la del portal de tu hotspot o una página específica
  res.redirect('https://www.ejemplo.com/pagina-de-exito');
});
// Inicia el servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en http://0.0.0.0:${port}`);
});
