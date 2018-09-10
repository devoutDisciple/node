const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
// const shell = require("shelljs");
const srcDir = path.resolve(__dirname, "../testVo");
const distDir = path.resolve(__dirname, "../distVo");

const consoleByMe = (data) => {
	console.info(chalk.yellow(data));
};

const removeDir = (dirPath) => {
	const files = fs.readdirSync(dirPath, {encoding: "utf8"});
	if(files.length == 0) return fs.rmdirSync(dirPath);
	files.forEach((file) => {
		fs.unlinkSync(path.resolve(dirPath, file));
		consoleByMe(`${file} was removed`);
	});
	fs.rmdirSync(dirPath);
	consoleByMe("the dir already is removed");
};
// const removeDirByShell = (dirPath) => {
// 	shell.exec(`rm -rf ${dirPath}`);
// 	shell.echo(`${dirPath} 已经被删除`);
// };
const _isExist = fs.existsSync(distDir);
if(_isExist) removeDir(distDir);
fs.mkdirSync(distDir);
const files = fs.readdirSync(srcDir, {encoding: "utf8"});
if(files.length == 0) throw new Error("the dir has not files");

files.forEach(fileName => {
	const data = fs.readFileSync(path.resolve(srcDir, fileName), {encoding: "utf8"});
	fs.writeFileSync(path.resolve(distDir, fileName), data, {encoding: "utf8"});
	consoleByMe(`${fileName} already is created`);
});
