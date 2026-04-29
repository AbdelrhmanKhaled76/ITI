import express from "express";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

const read = async () => {
  const data = await fs.readFile("./products.json", "utf-8");
  return JSON.parse(data);
};

const write = async (products) => {
  await fs.writeFile("./products.json", JSON.stringify(products));
};

app.get("/products", async (req, res) => {
  try {
    const products = await read();
    return res.status(200).json({
      data: products,
      message: "data is retrieved successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
      message: "an error happnened while retrieving data",
    });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const products = await read();
    const { id } = req.params;
    if(!id){
        return res.status(400).json({
            message : "id is required to get a specific product"
        });
    }
    const productIndex = products.findIndex(product => product.id === id);
    if(productIndex === -1){
        return res.status(404).json({
            message : "there is no product with that id"
        })
    }
    return res.status(200).json({
      data: products[productIndex],
      message: "data is retrieved successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
      message: "an error happnened while retrieving data",
    });
  }
});

const createProduct = (name, price) => {
  return { id: uuidv4(), name, price };
};

app.post("/products", async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(201).json({ message: "name and price are required" });
    }
    const product = createProduct(name, price);
    const products = await read();
    products.push(product);
    await write(products);
    return res.status(201).json({ data: product, message: "product is created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const {name, price} = req.body;
    const { id } = req.params;
    if (!id || !name || !price) {
      return res
        .status(400)
        .json({ message: "id, name, and price are required" });
    }
    const products = await read();
    const index = products.findIndex((stud) => stud.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], name, price };
      await write(products);
      return res.status(200).json({ data: products[index] , message: "product is updated successfully"});
    } else {
      return res.status(404).json({ message: "product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
}
});


app.patch("/products/:id", async (req, res) => {
    try {
        const {name, price} = req.body;
        const { id } = req.params;
        if (!id) {
            return res
            .status(400)
            .json({ message: "id is required" });
        }
        if(!name && !price){
            return res.status(400).json({ message: "at least one of name or price is required" });
        }
        const products = await read();
        const index = products.findIndex((stud) => stud.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], name: name || products[index].name, price: price || products[index].price };
            await write(products);
            return res.status(200).json({ data: products[index] });
        } else {
            return res.status(404).json({ message: "product not found" , id});
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const products = await read();
    const { id } = req.params;
    if(!id){
        return res.status(400).json({
            message : "id is required to get a specific product"
        });
    }
    const productIndex = products.findIndex(product => product.id === id);
    if(products.length === 0){
        return res.status(404).json({
            message : "there is no products to delete"
        });
    }
    if(productIndex === -1){
        return res.status(404).json({
            message : "there is no product with that id"
        });
    }
    products.splice(productIndex, 1);
    await write(products);
    return res.status(200).json({
        id,
      message: "product is removed successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
      message: "an error happnened while removing the product",
    });
  }
});

app.listen(5000, () => {
  console.log("server is running");
});
