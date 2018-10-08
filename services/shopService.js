const resultMessage = require("../util/resultMessage");
module.exports = {
	getList: () => {
		console.log("test");
		return resultMessage.success({
			"hello": "world"
		});
	},
	testHello: () => {
		return resultMessage.error({
			message: "this is test error"
		});
	}
};
