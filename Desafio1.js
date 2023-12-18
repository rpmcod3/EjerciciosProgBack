class ProductManager {

    #id = 0

    products () {

        this.products = []
       console.log(products)
    }
    


    getProducts() {
        return this.products;
             
     
    };

    getProductsById(id) {

        return this.products.find((product) => product.id === id);
    };


    idGenerator() {
        let id = 0;
        if (this.products.length === 0) {
            id = 1;
        } else {
            id = this.products[this.products.length - 1].id + 1;
        };
        return id;
    };

    isNotRepeated(code) {
        if (this.products.find((product) => product.code === code) !== undefined) {
            console.error("El codigo ya existe, posible producto duplicado.");
            return false;
        } else {
            return true;
        };
    };


    allFields(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Por favor, completa todos los campos.");
            return false;

        } else {
            return true;
        };
    };

     addProduct(title, description, price, thumbnail, code, stock) {

        if(this.allFields(title, description, price, thumbnail, code, stock) && this.isNotRepeated(code)){

            let newproduct = {

                id: this.idGenerator(),
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
            }
            this.products.push(newproduct);

        };
       
     };
     
     
};  

const productManageradd = new ProductManager();

productManageradd.addProduct (
    "producto prueba 1", 
    "Este es un producto prueba 1", 
    200,
    "Sin imagen",
     "abc120", 
     25);
     productManageradd.addProduct (
        "producto prueba 2", 
        "Este es un producto prueba 2", 
        200,
        "Sin imagen",
         "abc121", 
         25);
         productManageradd.addProduct (
            "producto prueba 4", 
            "Este es un producto prueba 4", 
            200,
            "Sin imagen",
             "abc124", 
             25);




console.log (ProductManager.getProductsById(2))

