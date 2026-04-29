import productModel from "../models/product.model.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        if (products.length === 0) {
            return res.status(200).json({ message: "No products found in database", data: [] });
        }
        res.status(200).json({
            message: "data is retrieved successfully",
            data: products
        });
    } catch (error) {
        throw error;
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params; 
        const product = await productModel.findById(id);
        
        if (!product) throw new Error("no product for that id");

        res.status(200).json({
            message: "data is retrieved successfully",
            data: product
        });
    } catch (error) {
        throw error;
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = new productModel({ name, price });
        await product.save();
        
        res.status(201).json({
            message: "product created successfully",
            data: product
        });
    } catch (error) {
        throw error;
    }
};

const updateProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const { id } = req.params;
        if(!name || !price){
            throw new Error("name and price are required for update");
        }
        const newProduct = await productModel.findByIdAndUpdate(
            id, 
            { name, price }, 
            { new: true, runValidators: true } 
        );

        res.status(200).json({
            message: "product updated successfully",
            data: newProduct
        });
    } catch (error) {
        throw error;
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; 
        const deletedProduct = await productModel.findByIdAndDelete(id);
        
        res.status(200).json({
            message: "product deleted successfully",
            data: deletedProduct
        });
    } catch (error) {
        throw error;
    }
};

export {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};