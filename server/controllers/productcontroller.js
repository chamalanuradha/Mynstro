import ProductModel from "../models/productmodel.js";

export async function createProduct(req, res) {
    try {
        const { name, description, price, stock, category, subcategory, image } = req.body;

        const newProduct = new ProductModel({
            name,
            description,
            price,
            stock,
            category,
            subcategory,
            image
        });
        const savedProduct = await newProduct.save();
        return res.status(201).json({
            message: "Product created successfully",
            error: false,
            success: true,
            data: savedProduct,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Error creating product",
            error: true,
            success: false,
        });
    }
}

export async function getAllProducts(req, res) {
    try {
        const products = await ProductModel.find();
        return res.json({
            message: "Products fetched successfully",
            error: false,
            success: true,
            data: products,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Error fetching products",
            error: true,
            success: false,
        });
    }   
}

export async function getProductById(req, res) {   
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false,
            });
        }   
        return res.json({
            message: "Product fetched successfully",
            error: false,
            success: true,
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Error fetching product",
            error: true,
            success: false,
        });
    }   
}
export async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false,
            });
        }
        return res.json({
            message: "Product updated successfully",
            error: false,
            success: true,
            data: updatedProduct,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Error updating product",
            error: true,
            success: false,
        });
    }
}

export async function deleteProduct(req, res) {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false,
            });
        }   
        return res.json({
            message: "Product deleted successfully",
            error: false,
            success: true,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || "Error deleting product",
            error: true,
            success: false,
        });
    }
}