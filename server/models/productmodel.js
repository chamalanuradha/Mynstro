import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {type: String,required: [true, "Product name is required"],trim: true,minlength: [2, "Name must be at least 2 characters"],maxlength: [100, "Name cannot exceed 100 characters"],},
    description: {type: String,required: [true, "Product description is required"],trim: true,minlength: [10, "Description must be at least 10 characters"],maxlength: [1000, "Description cannot exceed 1000 characters"],},
    price: {type: Number,required: [true, "Product price is required"],min: [0, "Price cannot be negative"],},
    rate: {type: Number,default: 0,min: [0, "Rate cannot be negative"],max: [5, "Rate cannot exceed 5"],},
    sold: {type: Number,default: 0,min: [0, "Sold quantity cannot be negative"],},
    stock: {type: Number,required: [true, "Stock quantity is required"],min: [0, "Stock cannot be negative"],},
    category: {type: String,required: [true, "Category is required"],trim: true,},
    subcategory: {type: String,trim: true,default: "",},
    image: {type: String, required: [true, "Product image is required"],},
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
