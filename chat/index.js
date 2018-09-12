const chalk = require("chalk");
module.exports = (io) => {
	io.on("connection", (socket) => {
		console.log(socket);
		console.log(chalk.yellow("a user connected"));
	});
};
