import express from "express";
import {
  checkEmail,
  register,
  login,
  refreshTokenHandler,
  logout,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/check-email", checkEmail);
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshTokenHandler);
router.post("/logout", logout);

export default router;
