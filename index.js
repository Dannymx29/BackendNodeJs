const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola ya estamos en linea con express');
})

app.listen(port, () => {
  console.log('Estoy en linea en el puesto: ' + port);
});
