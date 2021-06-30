import express from "express";
import controller from "./product-list.controller";

const router = express.Router();


router.get('/', controller.getProducts);

export default router;
