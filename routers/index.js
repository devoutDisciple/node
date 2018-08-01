const v1 = require("./v1Router");

const router = (app) => {
	app.use("/v1", v1);
};
module.exports = router;
