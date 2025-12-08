import { Router } from "express";
import { signup } from "../controlllers/user.controller.js";
const router = Router();

router.post("/signup", signup);
router.get("/", (req, res) => {
  res.json("its working");
});

export default router;
