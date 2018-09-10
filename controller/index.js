const shopController = require("./shopController");
const router = (app) => {
	app.use("/shop", shopController);
};
module.exports = router;
