import express from "express";

import { createItem, getItems } from "../controller/groceryitems.js";

const router = express.Router();

router.post("/", createItem);
router.get("/", getItems);

export default router;
