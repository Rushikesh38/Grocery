import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
})

var AdminItem = mongoose.model("AdminData", itemSchema);

export default AdminItem;
