const express = require('express');
const routerApi = require('./src/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido');
});

app.get('/home', (req, res) => {
  res.send('Home')
});

routerApi(app);

app.listen(port, () => {
  console.log(`run server in port: ${port}/api/v1`);
});
