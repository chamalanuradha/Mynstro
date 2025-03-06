import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: { type: String, default: '' },
    city: { type: String ,default: '' },
    state: { type: String ,default: '' },
    pinCode: { type: String ,default: '' },
    country: { type: String ,default: '' },
    mobile: { type: Number, default: null }  
}, {
    timestamps: true  
});

const AddressModel = mongoose.model("address", addressSchema);

export default AddressModel;