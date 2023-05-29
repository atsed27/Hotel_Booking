import express from "express";
import { Login, register } from "../controller/auth.js";
const router = express.Router();

router.post('/register',register);
router.post('/login',Login)

export default router;