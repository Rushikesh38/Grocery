import express from 'express';
import cartItems from "../models/cartmodel.js";

const router = express.Router();


export const getcartdata = async(req,res)=>{
    try{        
        // console.log(req.body)
        const cartitem = await cartItems.find({"creator":req.userId});
        // console.log(cartitem);
        // req.params vs req.userId
        res.status(200).json(cartitem);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

export const createcartdata = async (req,res)=>{
    const cartdata = req.body;

    const newCartData = new cartItems({
        ...cartdata,
        creator: req.userId,
    });
    try{
        await newCartData.save();
        (newCartData);
    }catch(error){
        res.status(409).json({message:
        error.message});
    }
};

export const deletecartdata = async (req,res)=>{
    try{
        await cartItems.deleteMany();
        res.status(200).json({message:"deleted"});
    }catch(error){
        res.status(404).json({message:error.message});
    }
};


export default router;