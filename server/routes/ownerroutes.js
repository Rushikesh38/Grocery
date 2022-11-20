import express from "express";

import { createOwnerItem, getOwnerItems } from "../controller/ownercontroller.js";

const router = express.Router();

router.post("/", createOwnerItem);
router.get("/", getOwnerItems);

export default router;
