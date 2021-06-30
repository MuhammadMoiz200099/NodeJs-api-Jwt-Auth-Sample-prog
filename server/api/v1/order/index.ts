import express from "express";
import controller from "./order.controller";

const router = express.Router();

router.post('/order', controller.createOrder);

export default router;
