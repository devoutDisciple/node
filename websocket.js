const express = require("express");
const app = express();
const socket = require("socket.io");
const chalk = require("chalk");

// 监听3001端口
const server = app.listen(3002, () => {
	console.log(chalk.yellow("socket was created"));
	console.log(chalk.yellow("server is listenning 3002"));
});
const io = socket.listen(server);
io.on("connection", (socket) => {
	console.log(socket.id);
	console.log(chalk.yellow("a user connected"));
	socket.on("login", (args) => {
		console.log("进入了login1");
		console.log(args);
		socket.emit("welcom", args.username);
	});
});
