import express from 'express';
import auth from '../middleware/auth.js';
import { getcartdata,createcartdata } from '../controller/cartcontroller.js';
const router = express.Router();

router.post("/",auth, createcartdata);
router.get("/",auth, getcartdata);


export default router;