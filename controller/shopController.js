const express = require("express");
const router = express.Router();
const shopService = require("../services/shopService");

router.get("/", (req, res) => {
	res.send(shopService.getList());
});


router.get("/test", (req, res) => {
	res.send(shopService.testHello());
});

module.exports = router;
