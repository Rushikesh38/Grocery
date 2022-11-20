import express from "express";
import OwnerItem from "../models/owner.js";

const router = express.Router();

export const getOwnerItems = async (req, res) => {
  try {
    const ownerItem = await OwnerItem.find({});
    // console.log(OwnerItem);
    res.status(200).json(ownerItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOwnerItem = async (req, res) => {
    const post = req.body;
    
    const newOwnerItem = new OwnerItem({
      ...post,
    });
    
    try {
      await newOwnerItem.save();
      // res.status(201).json(newOwnerItem);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  export default router;
