const express = require("express");
const router = express.Router();
const service1 = require("../services/V1Service");

router.get("/", service1.hello1);

router.get("/hello", service1.hello2);

module.exports = router;
