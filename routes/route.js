const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const { registerUser, loginUser } = require("../controllers/authController");
const {
  shortenURL,
  redirectToUrl,
} = require("../controllers/shortenController");

router.post("/user/register", registerUser);

router.post("/user/login", loginUser);

router.post("/short-url", shortenURL);

router.get("/:shortenUrl", redirectToUrl);

module.exports = router;
