import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";
import ErrorHandler from "../util/errorHandler.js"; 

const createCategory = async (req, res, next) => {
    try {
        const { name, description } = req.body;
        
        const category = await categoryModel.create({ name, description });

        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category
        });
    } catch (error) {
        next(error);
    }
};

const getAllCategories = async (req, res, next) => {
    try {
        const categories = await categoryModel.find();
        
        res.status(200).json({
            success: true,
            message: categories.length === 0 ? "No categories found" : "Data retrieved successfully",
            count: categories.length,
            data: categories
        });
    } catch (error) {
        next(error);
    }
};

const getProductsByCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const categoryExists = await categoryModel.findById(id);
        if (!categoryExists) {
            return next(new ErrorHandler("Category not found", 404));
        }

        const products = await productModel.find({ category: id })
            .populate("category", "name description");
        
        res.status(200).json({
            success: true,
            message: "Data retrieved successfully",
            data: products
        });
    } catch (error) {
        next(error);
    }
};

export {
    createCategory,
    getAllCategories,
    getProductsByCategory
};