const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Bienvenido');
});

app.get('/home', (req, res) => {
  res.send('Home')
});

app.get('/products', (req, res) => {
  const productos = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++){
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  };
  res.json(productos);
});

app.get('/products/filter', (req, res) => {
  res.send('yo soy un filtro');
});

app.get('/categories', (req, res) => {
  res.json([
    {
      nombre: "Categoria 1",
      cantidad: 234
    },
    {
      nombre: "Categoria 2",
      cantidad: 223
    },
    {
      nombre: "Categoria 3",
      cantidad: 123
    },
    {
      nombre: "Categoria 4",
      cantidad: 423
    },
    {
      nombre: "Categoria 5",
      cantidad: 312
    }
  ])
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('sin parametros')
  }
});

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `Categoria ${id}`,
      cantidad: 312
    }
  )
});

app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `Producto ${id}`,
      precio: 390
    }
  )
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `User ${id}`,
      age: 27
    }
  )
});

app.get('/categories/:categoryId/product/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId
    }
  )
});

app.get('/users/:userId/categories/:categoryId/product/:productId', (req, res) => {
  const { userId, categoryId, productId } = req.params;
  res.json(
    {
      userId,
      categoryId,
      productId
    }
  )
});

app.listen(port, () => {
  console.log(`run server in port: ${port}`);
});
