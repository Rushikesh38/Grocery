import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    descroiption:String,
    creator: String,
})

var cartItems = mongoose.model("cart",cartSchema);
export default cartItems;