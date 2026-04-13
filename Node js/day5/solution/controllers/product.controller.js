import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";
import ErrorHandler from "../util/errorHandler.js";

const getAllProducts = async (req, res, next) => {
    try {
        const products = await productModel.find();
        
        const user = req.user;

        res.status(200).json({
            success: true,
            message: products.length === 0 ? "No products found" : "Data retrieved successfully",
            data: products,
            role : user.role,
            username : user.username
        });
    } catch (error) {
        next(error);
    }
};

const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const product = await productModel.findById(id);
        
        if (!product) {
            return next(new ErrorHandler("No product found with that ID", 404));
        }

        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        next(error);
    }
};

const createProduct = async (req, res, next) => {
    try {
        const { name, price, category } = req.body;
        const product = await productModel.create({ name, price, category });
        
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const newProduct = await productModel.findByIdAndUpdate(
            id, 
            req.body, 
            { new: true, runValidators: true } 
        );

        if (!newProduct) {
            return next(new ErrorHandler("Cannot update: Product not found", 404));
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: newProduct
        });
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const deletedProduct = await productModel.findByIdAndDelete(id);
        
        if (!deletedProduct) {
            return next(new ErrorHandler("Cannot delete: Product not found", 404));
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};

export {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};