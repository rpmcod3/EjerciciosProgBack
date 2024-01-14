const productManager = require("./productManager")
const express = require("express");
const app = express(); 

app.get("/ping",(req,res) => {

res.send("pong");


})


app.get("/products/:id", (req, res) =>{



    let products = productManager.getAllProducts()

    res.send(products);


})


app.listen(3000, () => {
console.log("Aplicacion funcionando en el puerto 3000")

})


