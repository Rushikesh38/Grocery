import express from "express";
import PostMessage from "../models/testmodel.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find({});
    console.log(postMessage);
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
    const post = req.body;
  
    const newPostMessage = new PostMessage({
      ...post,
    });
  
    try {
      await newPostMessage.save();
      res.status(201).json(newPostMessage);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  export default router;
