import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
})

var ProductData = mongoose.model("PostMessage", itemSchema);

export default ProductData;
