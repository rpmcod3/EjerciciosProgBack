
/* import {promises as fs} from "fs" */

class ProductManager{
    constructor (){
        this.patch = "./productos.txt"
        this.products = []

    }

     static id = 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {


        ProductManager.id++


        let newProduct = {

            id: ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            
        }

        
        this.products.push (newProduct)
    

     await fs.writeFile(this.patch, JSON.stringify(this.products));
        

     };


     readProducts = async () => {
        let respuesta =  await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
     }


     
    getAllProducts(){
        return this.products;
    }

    getProducts = async () => {

    let segundaRespuesta = await this.readProducts()
   return  console.log (segundaRespuesta)
}


    getProductsById =  async (id) => {
        let terceraRespuesta = await this.readProducts()
       if (!terceraRespuesta.find(product => product.id ===id)){
        console.log("No encontramos tu producto")

       }else {
        console.log(terceraRespuesta.find(product => product.id ===id))
       }
        

    };

    deleteProductsById = async (id) => {
        let terceraRespuesta = await this.readProducts();
        let productFilter = terceraRespuesta.filter(products => products.id !=id )

        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        console.log("producto eliminado")
    };

    
    updateProducts = async ({id,...producto}) => {
        await this.deleteProductsById(id);
        let holdedproducts = await this.readProducts();
        
        let modifycatedProducts = [
            {...producto, id}, ...holdedproducts];



        await fs.writeFile(this.patch, JSON.stringify (modifycatedProducts));
    };

     }

    const productos = new ProductManager ();



        
    productos.addProduct (
    "producto prueba 1", 
    "Este es un producto prueba 1", 
    200,
    "Sin imagen",
     "abc120", 
     25);
    productos.addProduct (
        "producto prueba 2", 
        "Este es un producto prueba 2", 
        200,
        "Sin imagen",
         "abc121", 
         25);
         productos.addProduct (
            "producto prueba 4", 
            "Este es un producto prueba 4", 
            200,
            "Sin imagen",
             "abc124", 
             25);

             


        productos.getProducts()      
     productos.getProductsById(3) 
   /productos.deleteProductsById(2) 

   productos.updateProducts({


   
   id: 1,
    title: 'producto prueba 1',
    description: 'Este es un producto prueba 1',
    price: 3000,
    thumbnail: 'Sin imagen',
    code: 'abc120',
    stock: 25
    
})



let productManager = new ProductManager();


module.exports = productManager;
