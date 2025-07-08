// middlewares/upload.js
import multer from "multer";
import path from "path";

// Allowed file types
const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|webm|avi/;

// File filter function
const fileFilter = (req, file, cb) => {
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only images and videos are allowed"));
  }
};

// Multer config (in-memory storage for Cloudinary)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, // Max 50MB
});

export default upload;
