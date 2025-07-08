// controllers/userController.js
import User from "../models/User.js";

// @desc   Get current logged-in user's profile
// @route  GET /api/user/profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
