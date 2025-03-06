import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: 'user', required: true },
    orderId: { type: String, required: true, unique: true },
    productId: { type: mongoose.Schema.ObjectId, ref: 'product', required: true },
    product_details: {name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    },
    paymentId: { type: String, default: ''},
    payment_status: { type: String, default: "" },
    delivery_address: { 
        type: mongoose.Schema.ObjectId, ref: 'address'},
    subTotalAmt: { type: Number, required: true},
    totalAmt: { type: Number, required: true},
    invoice_receipt: { type: String, default: ''},
}, {
    timestamps: true 
});

const OrderModel = mongoose.model('order', orderSchema);

export default OrderModel;
