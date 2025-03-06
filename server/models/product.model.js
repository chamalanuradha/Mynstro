import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: Array, default: [] },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }],
    subCategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory'
    }],
    unit: { type: String },
    stock: { type: Number, default: null },
    price: { type: Number, required: true, default: null },
    discount: { type: Number, default: null },
    description: { type: String },
    more_details: { type: Object, default: {} },
    publish: { type: Boolean, default: true }
}, {
    timestamps: true
});

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;
