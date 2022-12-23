import express from 'express';
import auth from '../middleware/auth.js';
import { getcartdata,createcartdata, deletecartdata } from '../controller/cartcontroller.js';
const router = express.Router();

router.post("/",auth, createcartdata);
router.get("/", auth, getcartdata);
router.delete("/",auth, deletecartdata);


export default router;