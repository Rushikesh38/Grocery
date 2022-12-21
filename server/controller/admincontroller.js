import express from "express";
import AdminItem from "../models/adminproduct.js";

const router = express.Router();

export const getAdminItems = async (req, res) => {
  try {
    const adminItem = await AdminItem.find({});
    // console.log(AdminItem);
    res.status(200).json(adminItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAdminItem = async (req, res) => {
    const post = req.body;
    // console.log(req.userId)
    const newAdminItem = new AdminItem({
      ...post,
      creator: req.userId,
    });
  
    try {
      await newAdminItem.save();
      // res.status(201).json(newAdminItem);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  export default router;
