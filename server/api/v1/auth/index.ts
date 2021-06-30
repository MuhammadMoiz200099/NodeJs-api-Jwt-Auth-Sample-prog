import express from "express";
import * as auth from "../../../middlewares/authenticate";
import controller from "./auth.controller";

const router = express.Router();

router.get('/me', auth.isAuthenticated(), controller.getLoggedInUser);
router.post('/login', controller.login);

export default router;
