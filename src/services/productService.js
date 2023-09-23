const db = require("../data/db")

const productService = {
    getProductsLenovo:()=>{
        const products = db.products.getProducts().filter((product) => product.marca == "Lenovo");
        return (products);
    },
     getProductsApple:()=>{
        const products = db.products.getProducts().filter((product) =>product.marca =="Apple");
        return (products);
    },
    getProductsAsus:() =>{
        const products = db.products.getProducts().filter((product )=> product.marca == "ASUS");
        return (products);
    },
};


module.exports=productService;