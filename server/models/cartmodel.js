import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    descroiption:String,
})

var cartItems = mongoose.model("cart",cartSchema);
export default cartItems;