import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    creator: String,
    // description:String,
})

var cartItems = mongoose.model("cart",cartSchema);
export default cartItems;