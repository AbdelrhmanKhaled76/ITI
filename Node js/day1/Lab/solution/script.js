const fs = require("fs");

const [,, command , ...params] = process.argv;


function readAllProducts(){
    return JSON.parse(fs.readFileSync("./products.json", {
        encoding : "utf-8"
    }))
};

function writeProducts(allProducts){
    fs.writeFileSync("./products.json", JSON.stringify(allProducts));
};


function addProduct(name , price){
    const products = readAllProducts();
    let lastId = parseInt(products.at(-1).id);
    const newProduct = {
        id  : ++lastId,
        name,
        price : parseInt(price)
    };
    products.push(newProduct);
    writeProducts(products);
};

function listProducts(){
    readAllProducts().forEach((el,idx)=> {
        console.log(`product number ${idx + 1} , is called ${el.name} , and a price of ${el.price}$`);
    });
};

function updateProduct(id, name , price){
    if(!name && !price){
        throw new Error("you have to put new name or price in order to update a product");
    }
    const products = readAllProducts();
    const existingProductIndex = products.findIndex(product => product.id == id);
    if(existingProductIndex === -1){
        throw new Error("there is no product with that id");
    }
    const existingProduct = products.at(existingProductIndex);
    products[existingProductIndex] = {
        ...existingProduct,
        name : name ?? existingProduct.name ,
        price : price ? parseInt(price) : existingProduct.price
    };
    writeProducts(products);
};

function deleteProduct(id){
    const products = readAllProducts();
    const existingProductIndex = products.findIndex(product => product.id == id);
    if(existingProductIndex === -1){
        return;
    }
    products.splice(existingProductIndex,1);
    writeProducts(products);
};


switch(command){
    case "add":
        addProduct(params[0], params[1]);
        break;
    case "list":
        listProducts();
        break;
    case "update":
        const id = params[0];
        const updates = {};
        for (let i = 1; i < params.length; i++) {
            if (params[i] === '--name') {
                updates.name = params[i + 1];
                i++;
            } else if (params[i] === '--price') {
                updates.price = params[i + 1];
                i++;
            }
        }
        updateProduct(id, updates.name, updates.price);
        break;
    case "delete":
        deleteProduct(params[0]);
        break;
    default :
        console.log("Invalid Option !");
        return;
}