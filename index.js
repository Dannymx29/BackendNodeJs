const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola ya estamos en linea con express');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'producto 1',
    price: 1000
  });
});

app.get('/profile', (req, res) => {
  res.send('My profile');
});

app.listen(port, () => {
  console.log('Estoy en linea en el puesto: ' + port);
});
