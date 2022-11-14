const express = require('express');
const cors = require('cors');
const routerApi = require('./src/routes');

const { logErrors, errorHandler, boomErrorHandler} = require('./src/middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
routerApi(app);

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Bienvenido');
});

app.get('/home', (req, res) => {
  res.send('Home')
});



app.use(logErrors);//middlewares
app.use(boomErrorHandler)
app.use(errorHandler);//este middlerware es para no seguir el proceso

app.listen(port, () => {
  console.log(`run server in port: ${port}/api/v1`);
});
