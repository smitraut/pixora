// routes/userRoutes.js
import express from "express";
import requireAuth from "../middlewares/requireAuth.js";
import { getProfile } from "../controllers/userController.js";


const router = express.Router();

// ✅ GET /api/user/profile - Get current logged-in user's profile
router.get("/profile", requireAuth, getProfile);



export default router;
