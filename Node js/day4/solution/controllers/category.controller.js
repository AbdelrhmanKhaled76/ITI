import categoryModel from "../models/category.model.js";
import productModel from "../models/product.model.js";

const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = new categoryModel({ name, description });
        await category.save();

        res.status(201).json({
            message: "category created successfully",
            data: category
        });
    } catch (error) {
        throw error;
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        if (categories.length === 0) {
            return res.status(200).json({ message: "No categories found in database", data: [] });
        }
        res.status(200).json({
            message: "data is retrieved successfully",
            data: categories
        });
    } catch (error) {
        throw error;
    }
};

const getProductsByCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await productModel.find({ category: id }).populate("category", "name description");
        
        res.status(200).json({
            message: "data is retrieved successfully",
            data: products
        });
    } catch (error) {
        throw error;
    }
};

export {
    createCategory,
    getAllCategories,
    getProductsByCategory
};
