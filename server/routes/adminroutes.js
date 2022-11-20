import express from "express";

import { createAdminItem, getAdminItems } from "../controller/admincontroller.js";

const router = express.Router();

router.post("/", createAdminItem);
router.get("/", getAdminItems);

export default router;
