import express from "express";
// TODO: put the code for need to be logedin as admin to do these tasks (1:50:00) of the video
import { createAdminItem, getAdminItems } from "../controller/admincontroller.js";

const router = express.Router();

router.post("/", createAdminItem);
router.get("/", getAdminItems);

export default router;
