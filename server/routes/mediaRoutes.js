// routes/mediaRoutes.js
import express from "express";
import {
  uploadMedia,
  getExploreMedia,
  fetchUserMedia,
} from "../controllers/mediaController.js";
import upload from "../middlewares/upload.js";
import requireAuth from "../middlewares/requireAuth.js";

const router = express.Router();

// @route   POST /api/media/upload
// @desc    Upload media file (image or video)
// @access  Private
router.post("/upload", requireAuth, upload.single("file"), uploadMedia);
router.get("/explore", getExploreMedia);
router.get("/user", requireAuth, fetchUserMedia);

export default router;
