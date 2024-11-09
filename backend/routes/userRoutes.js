import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);

export default router;
