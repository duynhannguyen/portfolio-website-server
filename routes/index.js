import express from "express";
import contact from "../controller/contact.controller.js";

const router = express.Router();

router.use("/contact", contact.contactForm);

export default router;
