import cloudinary from "../utils/cloudinary.js";
import Media from "../models/Media.js";

// @desc    Upload media (image or video)
// @route   POST /api/media/upload
// @access  Private
export const uploadMedia = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert file buffer to base64 string
    const base64File = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(base64File, {
      folder: "pixora",
      resource_type: "auto",
    });

    // ✅ Save to MongoDB and link to user
    const savedMedia = await Media.create({
      user: req.user.id, // Linked via JWT middleware
      url: result.secure_url,
      public_id: result.public_id,
      resource_type: result.resource_type,
    });

    res.status(201).json({
      message: "Upload successful",
      media: savedMedia,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};

export const fetchUserMedia = async (req, res, next) => {
  try {
    const items = await Media.find({ user: req.user.id }).sort("-createdAt");
    return res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};


export const getExploreMedia = async (req, res) => {
  try {
    const media = await Media.find()
      .populate("user", "name") // Optional: include user's name
      .sort({ createdAt: -1 }) // Newest first
      .select("-__v"); // Clean output

    res.status(200).json(media);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch media", error: err.message });
  }
};
