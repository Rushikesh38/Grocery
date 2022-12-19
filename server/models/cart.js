import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    descroiption:String,
})

var cartItems = mongoose.model("cartItem",cartSchema);
export default cartItems;