import productManager from './productManager.mjs';
import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/products', (req, res) => {
 
  let products = productManager.getAllProducts();
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  let product = productManager.getProductById(id);
  res.send(product);
});

app.listen(3000, () => {
  console.log('Aplicacion funcionando en el puerto 3000');
});
