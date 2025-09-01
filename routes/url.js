const express = require("express");
const { handleGenerateNewShortUrl } = require("../controllers/url");

const router = express.Router();



router.post('/', handleGenerateNewShortUrl);
// router.post("/analytics/:shortId", handleGetAnalytics);

module.exports = router;