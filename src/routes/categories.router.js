const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `Categoria ${id}`,
      cantidad: 312
    }
  )
});

router.get('/:categoryId/product/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId
    });
});

module.exports = router;
