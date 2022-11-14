const express = require('express');
const routerApi = require('./src/routes');

const { logErrors, errorHandler} = require('./src/middlewares/error.handler');

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

app.use(logErrors);//middlewares
app.use(errorHandler);//este middlerware es para no seguir el proceso

app.listen(port, () => {
  console.log(`run server in port: ${port}/api/v1`);
});
