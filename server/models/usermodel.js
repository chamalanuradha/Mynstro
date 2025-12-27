import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" },
    mobile: { type: Number, default: null },
    address: { type: String, default: "" },
    refresh_token: { type: String, default: "" },
    last_login_date: { type: Date, default: "" },
    status: { type: String, enum: ["Active", "Inactive", "Suspended"], default: "Active" },
    forget_password_otp: { type: String, default: ''},
    forget_password_expiry: { type: Date, default:'' },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" }
}, {
    timestamps: true
});

const UserModel = mongoose.model("user", userSchema);
export default UserModel;
