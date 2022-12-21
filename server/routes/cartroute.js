import express from 'express';
import { getcartdata,createcartdata } from '../controller/cartcontroller';
const router = express.Router();

router.post("/",createcartdata);
router.get("/",getcartdata);


export default router;