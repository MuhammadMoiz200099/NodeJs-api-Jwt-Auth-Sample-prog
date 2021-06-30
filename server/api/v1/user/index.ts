import express from "express";
import controller from "./user.controller";

const router = express.Router();

router.get('/', (req, res) => { res.status(200).json("hello World") });
router.post('/', controller.create);

export default router;
